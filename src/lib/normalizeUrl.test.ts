import { describe, expect, it } from 'vitest';
import { normalizeUrl } from './normalizeUrl';

describe('normalizeUrl', () => {
  it('adds https:// when a URL has no protocol', () => {
    expect(normalizeUrl('mywebsite.com')).toBe('https://mywebsite.com');
  });

  it('preserves an existing https:// prefix', () => {
    expect(normalizeUrl('https://mywebsite.com')).toBe('https://mywebsite.com');
  });

  it('preserves an existing http:// prefix', () => {
    expect(normalizeUrl('http://mywebsite.com')).toBe('http://mywebsite.com');
  });

  it('trims surrounding whitespace before normalizing', () => {
    expect(normalizeUrl('  mywebsite.com  ')).toBe('https://mywebsite.com');
  });

  it('keeps an empty value empty', () => {
    expect(normalizeUrl('   ')).toBe('');
  });
});
