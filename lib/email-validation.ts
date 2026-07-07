export function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function getEmailValidationMessage(value: unknown) {
  const email = normalizeEmail(value);

  if (!email) {
    return "Please enter your email address.";
  }

  if (email.length > 254 || /\s/.test(email)) {
    return "Please enter a valid email address.";
  }

  const parts = email.split("@");

  if (parts.length !== 2) {
    return "Please enter an email address with @ and a domain.";
  }

  const [localPart, domain] = parts;

  if (!localPart || !domain || localPart.length > 64 || domain.length > 253) {
    return "Please enter a valid email address.";
  }

  if (
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    localPart.includes("..") ||
    domain.includes("..")
  ) {
    return "Please enter a valid email address.";
  }

  const domainLabels = domain.split(".");
  const topLevelDomain = domainLabels.at(-1) ?? "";

  if (
    domainLabels.length < 2 ||
    topLevelDomain.length < 2 ||
    !/^[a-z]{2,}$/i.test(topLevelDomain)
  ) {
    return "Please enter a valid email domain, for example name@company.com.";
  }

  const hasInvalidDomainLabel = domainLabels.some(
    (label) =>
      !label ||
      label.length > 63 ||
      !/^[a-z0-9-]+$/i.test(label) ||
      label.startsWith("-") ||
      label.endsWith("-"),
  );

  if (hasInvalidDomainLabel) {
    return "Please enter a valid email domain, for example name@company.com.";
  }

  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(localPart)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function isValidEmail(value: unknown) {
  return !getEmailValidationMessage(value);
}
