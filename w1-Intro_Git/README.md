# Before We Get Started:

* Install Git
  * _[https://git\-scm\.com/book/en/v2/Getting\-Started\-Installing\-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)_
* Make sure you have access to a GitHub account
  * Create one if you don't have one
  * Make sure you know your username & password\! \(write it down somewhere\)
  * Personal preference\, but use a personal email

![](img%5Cgit0.png)

# What is the ACM SWE SIG?

SWE SIG = Software Engineering Special Interest Group

Weekly Workshops working to develop SWE Skills

No Previous Experience Needed\! Any majors welcomed\!

# Quick Look into the Semester

<span style="color:#FFFFFF">Git</span>

<span style="color:#FFFFFF">HTML</span>

<span style="color:#FFFFFF">JavaScript</span>

<span style="color:#FFFFFF">APIs</span>

<span style="color:#FFFFFF">Databases</span>

<span style="color:#FFFFFF">Frameworks</span>

<span style="color:#FFFFFF">Flask \+ Deployment</span>

<span style="color:#FFFFFF">End of the Semester Activity</span>

<span style="color:#FFFFFF">Mini Hackathon</span>

<span style="color:#FFFFFF">Group SWE Project</span>

<span style="color:#FFFFFF">Challenge</span>

# What is Git?

Git is an open source version control system\.

Imagine Google Drive\, but for your code

Git allows programmers to keep track of changes in their code\, and allows developers across the globe tocollaboratewith one another\.

We can use Git in different forms\, but we will be focusing on using the CLI \(Command Line Interface\) for this workshop

# Why learn Git?

For school\, it allows us to not lean on using a USB to transfer code over from computer tocomputer\. Gives another layer of security\. Recruiters also check this out too\!

For industry\, in any job\, your code will be hosted on some server somewhere and Git \(or some variant of it\) will be the way you add your changes\.

Overall\, just a super helpful tool\, ESPECIALLY when working with other software developers\!

![](img%5Cgit2.gif)


# How To Start A Repo

![](img%5Cgit4.png)

* <span style="color:#FFFFFF"> __What’s a repo?__ </span>
  * <span style="color:#FFFFFF"> __Fancy name for a__ </span>  <span style="color:#FFFFFF"> __project__ </span>
* __git init__
  * __Initialize a new local repo__
* __git clone \[link\-to\-remote\-repo\]__
  * __Copies the remote repo on to your local machine__

# 0th step: Create the repo

To create the repo\, we need to go on GitHub and create a new repo on there\.

# 1st step: Configure Git

* git config \-\-global user\.email " _[you@example\.com](mailto:you@example.com)_ "
* git config \-\-global user\.name "Your Name"
* Next\, we need to navigate to where we want to store the repo locally and run:	git clone \[copied\_github\_url\]
  * This is setting up the local repo with all of the current info from the GitHub repo

# 2nd Step: Modify Files,  Add Changes

* Now that we have created our repo\, we can start adding changes\!
* Let’s first make a text file called myTextFile\, and open it up on your favorite text editor of choice \(VSCode is superior just saying\)\. Write down your birthday in the text file\.
* Cool\! We just created a file in our repo\. Let’s run git status and see what it tells us
  * Git status tells us what changes have been made so far

# 2nd Step: Modify Files,  Add Changes (cont.)

* Alright\, now we want to tell Git which files we want to commit
  * We first need to tell Git whatspecificfiles we want to add
    * We can do this two ways: we can do git add \[fileName\] which adds the fileName
    * Or we can do git add \*\, which adds ALL the files that have been changed\.
* This does NOT push your code\, but “stages” them for us to commit later\.

# 3rd Step: Commit Changes

* Now that we have added all of the changes\, we want to commit our changes  before we push
* All we need to is use the git commit command like so:
    * git commit \-m “My very first commit\!”

# 4th Step: Push!

With our changed files committed\, it is now time to push it to the remote GitHub server\.

To do this\, run:	git push

# 5th Step: Pull

Make changes to your text file in GitHub and commit the changes\. When you return to your cloned repo the changes will not show up until you run the following command:

git pull

# 6th Step: Merge Conflicts

Commit a new line oftext on GitHub

Without pulling\, add a different line to your text file in your local workspace

Try to push the changes

This will create a merge conflict

Compare the two files and fix the conflict by either adding another line or deleting the committed code in GitHub

# Git User Interfaces

GitKraken\*

GitHub Desktop\*

VS Code Git extension

Eclipse

Most Text Editors

![](img%5Cgit5.png)

_[GitHub Student Developer Pack](https://education.github.com/pack)_

# Quick Review

* Seems pretty daunting but you might notice a pattern\.
* Whenever we want to push changes to Github \(assuming we already created a repo\)\, we just need to do the follow:
  * git add \(tells Git what files to have in our commit\)
  * git commit \(creates the commit message\)
  * git push  \(takes our commit from our computer and onto Github\)
  * Git pull \(updates your workspace with new code that may have been pushed by someone else
* Questions?

# So what now?

* Practice Git by pushing any old code on your computer\!
* Next Step On Your Git Journey \-> Branches
* Next NEXT Step On the Git Journey \-> Reverting commits
  * \(so you know how to undo your mistakes\)

# Resources

Git Cheat Sheet

_[https://www\.atlassian\.com/git/tutorials/atlassian\-git\-cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)_

_[https://education\.github\.com/git\-cheat\-sheet\-education\.pdf](https://education.github.com/git-cheat-sheet-education.pdf)_

_[https://training\.github\.com/downloads/github\-git\-cheat\-sheet\.pdf](https://training.github.com/downloads/github-git-cheat-sheet.pdf)_

