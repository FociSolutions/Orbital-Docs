# Orbital-Docs

This repo contains the content for the [https://orbitalmock.com](https://orbitalmock.com) website.

The site is hosted via [GitHub Pages](https://pages.github.com). It is built using the [Jekyll](https://jekyllrb.com) static site generator.

To make changes to the site, merge the updates into the `main` branch and GitHub will re-compile and update the pages automatically after a few minutes.

## Building Website locally

### Windows OS

#### Ruby

1.  Navigate to [Ruby Installer](https://rubyinstaller.org/downloads/) for Windows and download the latest version.
2.  Launch the requisite `<ruby_version>.exe` file in `Downloads` directory and follow the install Wizard prompts. Accept licensing terms, check packages and installation location.
3.  Once installed, a cmd shell opens and instructs to install dependencies - press `1,3` and hit `Enter` to install all.
4.  A second prompt asks to install further dependencies. Hit `Enter` to install.
5.  The shell automatically closes down. Open a new terminal to confirm installation with `ruby -v`. Output should read similar to:

```
PS C:\Users\<USERNAME> ruby -v
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x64-mingw-ucrt]
```

#### Bundle & Jekyll

1. Open a new cmd and install Jekyll and Bundler using `gem install jekyll bundler`
2. Confirm install with `jekyll -v`. Output should read similar to:

```
PS C:\Users\<USERNAME> jekyll -v
jekyll 3.9.2
```

#### Launch orbitalmock.com locally

1. Navigate to `Orbital-Docs` directory where the `_config.yml` and `Gemfile` are located.
2. Open a cmd shell (VSCode recommended) and enter `bundle exec jekyll serve` .
3. The builder will confirm configs, dependencies and serve the website locally on http://localhost:4000

**For further troubleshooting info and guides, please consult the [Official Jekyll docs for Windows](https://jekyllrb.com/docs/installation/windows/)**

### macOS

#### Install a Package Manager

- Install the [Homebrew](https://docs.brew.sh/Installation) package manager.

#### Install Ruby

1. Use Homebrew to install ruby:

   `brew install ruby`

2. Add the homebrew ruby to the `PATH` to override the macOS ruby\
    <https://mac.install.guide/ruby/13.html>\
   Edit the `~/.zshrc` file and add the following to the bottom of the file (For Intel Mac):

   ```sh
   if [ -d "/usr/local/opt/ruby/bin" ]; then
     export PATH=/usr/local/opt/ruby/bin:$PATH
     export PATH=`gem environment gemdir`/bin:$PATH
   fi
   ```

3. Launch a new terminal and confirm the ruby version with `ruby -v `\
   It should be version 3.x.x (not 2.x.x)\
   i.e. `ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin20]`

#### Install Jekyll & Bundler

1. Install Jekyll and Bundler using `gem install jekyll bundler`
2. Confirm install with `jekyll -v`. Output should read similar to: `jekyll 4.2.2`\
   Note: `jekyll -v` may not work from the repo directory, try from the home directory `cd ~`

### Install the bundle included in the repo

1. Open a terminal
2. Navigate to `Orbital-Docs` directory where the `Gemfile` file is located.
3. Install the bundle using `bundle install`

#### Build and Launch the site locally

1. Navigate to `Orbital-Docs` directory where the `_config.yml` is located.
2. Open a terminal and enter `bundle exec jekyll serve`.
3. The builder will confirm configs, dependencies and serve the website locally on http://localhost:4000
