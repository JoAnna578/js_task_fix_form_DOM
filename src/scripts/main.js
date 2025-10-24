function formatLabel(str) {
  if (!str) return '';

  // Usuń prefiks przed pierwszym '-' lub '_'
  str = str.replace(/^[^-_]+[-_]/, '');

  // Zamień '_' i '-' na spacje
  str = str.replace(/[-_]/g, ' ');

  // Rozbij camelCase przez dodanie spacji przed wielką literą
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Title Case: każde słowo z dużej litery
  str = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return str.trim();
}
