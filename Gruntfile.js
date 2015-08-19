module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['Gruntfile.js', 'example.html', 'exampleController.js'],
      // tasks: ['jshint', 'qunit']
        options: {
      		livereload: true,
    	}
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};