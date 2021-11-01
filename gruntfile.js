module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-move')
  grunt.loadNpmTasks('grunt-text-replace')

  grunt.initConfig({
    replace: {
      dist: {
        src: ['build/*.js'],
        overwrite: true,
        replacements: [
          { from: '../helpers/', to: './' },
          { from: './helpers/', to: './' },
          { from: '../roles/', to: './' },
          { from: './roles/', to: './' },
          { from: '../', to: './' },
        ],
      },
    },

    clean: {
      build: ['build/types'],
    },

    move: {
      helpers: {
        src: 'build/helpers/*',
        dest: 'build/',
      },
      roles: {
        src: 'build/roles/*',
        dest: 'build/',
      },
    },
  })

  grunt.registerTask('default', ['clean', 'replace', 'move'])
}