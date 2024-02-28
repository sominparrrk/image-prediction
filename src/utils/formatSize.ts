export const formatSize = (bytes: number): string => {
  if (bytes < 1024) {
    return bytes + ' B';
  } else if (bytes < 1024 * 1024) {
    const kilobytes = (bytes / 1024).toFixed(2);
    return kilobytes.endsWith('.00') ? kilobytes.slice(0, -3) + ' KB' : kilobytes + ' KB';
  } else {
    const megabytes = (bytes / (1024 * 1024)).toFixed(2);
    return megabytes.endsWith('.00') ? megabytes.slice(0, -3) + ' MB' : megabytes + ' MB';
  }
};
