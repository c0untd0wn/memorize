echo "#### Change branch to gh-pages ####"
git checkout gh-pages
echo "#### Merge with master branch ####"
git merge master
echo "#### Push to gh-pages ####"
git push
echo "#### Come back to master branch ####"
git checkout master
