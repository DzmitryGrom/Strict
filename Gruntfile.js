/*global module*/
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        less: {
            dev: {
                files: {
                   
                    'css/main.css': 'less/main.less'
                }
            }
        },
     
        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};