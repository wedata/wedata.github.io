# wedata@GitHub

Yet another version of "[wedata](http://wedata.net/)"

Cf.) [DataWikiを実現するWedataの構築と運用](http://www.slideshare.net/eto/datawikiwedata)

## Contributing (to create a new database)

### Step 1: Clone and Commit

1. Clone [wedata@GitHub/template](https://github.com/wedata/template) ***DO NOT FORK***  
	(`git clone git@github.com:wedata/template.git <new-database-name>`)
1. Modify README.md at least
1. Add an items file (items.json as default) which you want to share
1. Commit your changes (`git commit -am "First Commit for <new-database-name>"`)

### Step 2: Push

1. Remove the remote origin (`git remote remove origin`)
1. Create a new repository for the new database in your GitHub
1. Add the above repository as a remote origin (`git remote add origin <git-url>`)
1. Push it (`git push origin master`)

### Step 3: Let us know

1. Let us know to fork it back into wedata (Open an issue [here](https://github.com/wedata/wedata.github.io/issues))
1. We will add you to our team as a collaborator