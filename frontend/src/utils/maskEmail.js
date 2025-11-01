export const maskEmail = (email) => {
  if (!email) return "";
  const [localPart, doamin] = email.split("@");
  console.log(email.split("@"));
  if (localPart.length <= 2) return localPart[0] + "***" + "@" + doamin;
  return localPart[0] + "***" + localPart.slice(-1) + "@" + doamin;
};