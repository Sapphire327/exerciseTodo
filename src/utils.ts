const PLACEHOLDER = '-';

export function getKeyOrPlaceholder(target, key) {
  return target[key] || PLACEHOLDER;
}
