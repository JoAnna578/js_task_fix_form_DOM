function formatLabel(str) {
  if (!str) return '';
  const parts = str.split(/[-_]/);
  if (parts.length > 1) parts.shift(); // usuń prefiks
  let result = parts.join(' ');
  result = result.replace(/([a-z])([A-Z])/g, '$1 $2'); // rozbij camelCase
  return result
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}
