export const maskEmail = (email) => {
  if (!email) return "";

  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) return "";

  if (localPart.length <= 2) return `${localPart[0]}***@${domain}`;
  return `${localPart[0]}***${localPart.slice(-1)}@${domain}`;
};
