var fs = require('fs');
var TreeModel = require('tree-model');
const YAML = require('yaml');
var  tree = new TreeModel();
var  ymltree = new TreeModel();

var     root = tree.parse({name: '1', 
        children: [{name: '1.1'}, 
                {name:'1.2', children: [{name:'1.2.1'},{name:'1.2.2'}]}]
    
    });

//console.log(YAML.stringify(root));

//console.log('root:',root);
const file = fs.readFileSync('./projectTreeNames.yml', 'utf8')
var yml=YAML.parse(file)

console.log('yml: ',yml)

var ymlroot= ymltree.parse(yml);
console.log('----ymlroot-----',ymlroot);
ymlroot.walk(function (node) {
    // Halt the traversal by returning false
    var path='/';
    node.getPath().forEach(n=>{ path=path+n.model.projName+'/' });
    console.log(  path );
});



//console.log('----root-----')
//console.log(root);

// root.walk(function (node) {
//     // Halt the traversal by returning false
//     var path='/';
//     node.getPath().forEach(n=>{ path=path+n.model.name+'/' });
//     console.log(  path );
// });

