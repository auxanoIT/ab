import {
  checklistCategories,
  checklistMaxScore,
  type ChecklistCategoryId,
} from "@/data/checklist-lead-magnet";

export type ChecklistAnswer = "yes" | "partial" | "no";

export type ChecklistAnswerMap = Record<string, ChecklistAnswer | undefined>;

export type ChecklistBandId =
  | "excellent"
  | "good"
  | "needs-attention"
  | "high-risk";

export type ChecklistCategoryScore = {
  categoryId: ChecklistCategoryId;
  category: string;
  score: number;
  maxScore: number;
};

const answerScores: Record<ChecklistAnswer, number> = {
  yes: 1,
  partial: 0.5,
  no: 0,
};

export function getChecklistAnswerScore(answer: ChecklistAnswer | undefined) {
  return answer ? answerScores[answer] : 0;
}

export function calculateChecklistScore(answers: ChecklistAnswerMap) {
  return checklistCategories.reduce(
    (total, category) =>
      total +
      category.questions.reduce(
        (categoryTotal, question) =>
          categoryTotal + getChecklistAnswerScore(answers[question.id]),
        0,
      ),
    0,
  );
}

export function calculateChecklistCategoryScores(
  answers: ChecklistAnswerMap,
): ChecklistCategoryScore[] {
  return checklistCategories.map((category) => ({
    categoryId: category.id,
    category: category.title,
    score: category.questions.reduce(
      (total, question) => total + getChecklistAnswerScore(answers[question.id]),
      0,
    ),
    maxScore: category.questions.length,
  }));
}

export function getChecklistBand(score: number): {
  id: ChecklistBandId;
  label: string;
  description: string;
  recommendation: string;
} {
  const scorePercent = getChecklistScorePercent(score);

  if (scorePercent >= 90) {
    return {
      id: "excellent",
      label: "Excellent",
      description:
        "Your technology and security foundations look strong. Keep the discipline alive with scheduled testing, documentation updates, and staff training.",
      recommendation:
        "Book a periodic review to validate assumptions and keep systems ready for growth.",
    };
  }

  if (scorePercent >= 70) {
    return {
      id: "good",
      label: "Good",
      description:
        "Your environment has a solid base, but a few gaps could still create downtime, security, or compliance exposure.",
      recommendation:
        "Prioritize the lowest scoring areas and schedule a focused remediation review.",
    };
  }

  if (scorePercent >= 50) {
    return {
      id: "needs-attention",
      label: "Needs Attention",
      description:
        "Moderate gaps are visible. Your business should treat this as an operational risk and validate the weak areas within 30 days.",
      recommendation:
        "Start with an infrastructure, cybersecurity, backup, and physical security audit.",
    };
  }

  return {
    id: "high-risk",
    label: "High Risk",
    description:
      "Significant gaps may expose the business to downtime, breaches, data loss, fire-safety issues, or compliance failures.",
    recommendation:
      "Book a technical assessment before the gaps become an expensive incident.",
  };
}

export function formatChecklistScore(score: number) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

export function getChecklistScorePercent(score: number) {
  return Math.round((score / checklistMaxScore) * 100);
}
