module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['import'],
    extends: [
      'plugin:import/typescript',
      // ...
    ],
    rules: {
      'import/no-cycle': 2,  // Bật quy tắc để phát hiện vòng tròn
      // ...
    },
  };
  