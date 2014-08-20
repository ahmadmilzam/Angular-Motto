Angular-Motto
=============

A dummy Angular project filled with commented examples from Todd Motto's [AngularJS styleguide](https://github.com/toddmotto/angularjs-styleguide). 

What's this for?
================

The repository is designed to be a resource/learning aid based off of Todd Motto's [AngularJS styleguide](https://github.com/toddmotto/angularjs-styleguide) that you can pull into your own projects and quickly reference how logic should be written following the guidelines. It provides simple examples which have been taken from the styleguide and puts them into a real structure that has been thoroughly commented with remarks made in the guide.

### Information on structure

The `scripts` folder follows the structure given in the guide for a smaller sized project. If you are looking for a large application structure you will most likely use a much more modular approach. I have included an example of what this may look like under `large_app_structure` - it is just a shell and there is no code in there.

This is still very much a work in progess so I am opening it up to anyone who wants to make changes and it can hopefully grow over time.

Using it in your project
========================

`git clone git@github.com:davidreid/Angular-Motto.git`

I have tried to make it simple enough that you can just clone the repository and drop the scripts file into your project and you can begin to edit the given examples with actual application logic. 

It would also work well as a resource that sits outside of your project that you can use to aid the building of your actual logic. This way you can just quickly check how something should be written by seeing it in a project environment.

Things to be aware of
=====================

There are a few things that I wanted to point out that this repo does not accomplish. 

### Not a working project

At this moment in time the repositories code is just dummy content and mainly illustrates the points made in the styleguide. None of it has been hooked up to actually work and it should be seen as more of a quick reference/learning resource rather than a working application.

### Not all features of the styleguide have been covered.

There is a ton of great content in the styleguide and it was hard to put it all into project examples without the code becoming cluttered and sacrificing readability. My aim was just to capture the majority of the points made within the guide and show them in an easy to use manner. The areas I have covered are as follows:

- Controllers
- Directives
- Filters
- Services
- Modules
- Route Resolves
- Some performance points

I will try to think of the best way to update the project with extra information and maintain readability.

For now though, any extra information can be found on the styleguide so I urge you to check that out. Things I have missed are as follows:

- Pub/Sub events
- Some performance points
- Angular Wrapper references
- Comment standards
- Minification and annotation


Big thanks to Todd Motto for the styleguide
===========================================

There is a vast amount of brilliant content sitting in the guide that this repository has missed out. I urge anyone to check it out and read through it a 1000000 times because it supplies invaluable information. Any additional things I have missed out in this repo I am sure you will find through the styleguide.
