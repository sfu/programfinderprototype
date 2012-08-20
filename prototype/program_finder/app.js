var fs = require('fs')
,   ejs = require('ejs')
,   data = JSON.parse(fs.readFileSync(__dirname + '/programs.json'), 'utf-8')
,   finderTmpl = fs.readFileSync(__dirname + '/program-finder.ejs', 'utf-8')
,   toggleTmpl = fs.readFileSync(__dirname + '/program-toggle.ejs', 'utf-8');

// program-finder
console.log('creating finder.html');
fs.writeFileSync(__dirname + '/finder.html', ejs.render(finderTmpl, {programs: data}));

// program-toggle
console.log('creating toggle.html');
fs.writeFileSync(__dirname + '/toggle.html', ejs.render(toggleTmpl, {programs: data}));