# wedata@GitHub

Yet another version of "[wedata](http://wedata.net/)"

Cf.) [DataWikiを実現するWedataの構築と運用](http://www.slideshare.net/eto/datawikiwedata)

## Contributing (to create a new database)

1. Clone [wedata@GitHub/template](https://github.com/wedata/template) (`git clone git@github.com:wedata/template.git`) ***DO NOT FORK***
1. Rename it (`mv template <new-database-name>`)
1. `cd <new-database-name>`
1. Remove the remote origin (`git remote remove origin`)
1. Create a new repository for the new database in your GitHub
1. Add the above repository as a remote origin (`git remote add origin <url>`)
1. Modify README.md at least
1. Add an items file (items.json as default) which you want to share
1. Commit your changes (`git commit -am "First Commit for <new-database-name>"`)
1. Push it (`git push origin master`)
1. Let us know to fork it back into wedata (Open an issue [here](https://github.com/wedata/wedata.github.io/issues))
1. We will add you to our team as a collaborator