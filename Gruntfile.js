/* global module:true 
 * 
 * Gruntfile.js
 * npm install -g grunt-cli
 * npm install grunt-contrib-less grunt-contrib-watch grunt-contrib-connect --save-dev
 */
module.exports = function(grunt) {
  'use strict';
  // Default port
  var LIVERELOAD_PORT = 35729;
	
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public',
          // This will inject live reload script into the html
          livereload: LIVERELOAD_PORT
        }
      }
    },
  
    watch: {
      options: {
        livereload: LIVERELOAD_PORT
      },
      // files: "./app/less/*.less",
      // tasks: ["less"]
    }
  });
 
  // Run grunt server to get going
  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);
};