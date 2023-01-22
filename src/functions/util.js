export function getCookie(cookie_name) {
  const all_cookies = `; ${document.cookie}`;
  const parts = all_cookies.split(`; ${cookie_name}=`);
  if (parts.length === 2)
      return parts.pop();
}