/**
 * Fungsi untuk melakukan pencarian data user
 *
 * @param {Array} sourceData - data mentah dari API
 * @param {String} searchName - keyword untuk melakukan pencarian berdasarkan nama user
 * @returns {Array}
 */
export function filter(sourceData, searchName = '') {
  return sourceData.filter((v) =>
    v.name.toLowerCase().includes(searchName.toLowerCase()),
  );
}
