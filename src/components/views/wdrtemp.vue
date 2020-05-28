<template>
  <div>
    
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'

var host = 'http://10.199.14.46:8025/'
// var host = 'http://127.0.0.1:8025/'
</script>
<div id="wdr-component"></div>
<link href="https://cdn.webdatarocks.com/latest/webdatarocks.min.css" rel="stylesheet"/>
<script src="https://cdn.webdatarocks.com/latest/webdatarocks.toolbar.min.js"></script>
<script src="https://cdn.webdatarocks.com/latest/webdatarocks.js"></script>
<script>
var pivot = new WebDataRocks({
	container: "#wdr-component",
	toolbar: true,
	report: {
		dataSource: {
			filename: "https://cdn.webdatarocks.com/data/data.csv"
		}
	}
});
</script>
