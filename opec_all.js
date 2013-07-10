{
   "id": "opec",
   "paths": [
      "html/static/js-libs/"
   ],
   "inputs": [
      "src/opec.js",
      "src/libs/dialog.js",
      "src/opecportal.js",
      "src/window.js",
      "src/windows/scalebar.js",
      "src/windows/graphcreator.js",
      "src/windows/metadata.js",
      "src/windows/layerselector.js",
      "src/gritter.js",
      "src/graphing.js",
      "src/utils.js",
      "src/panel.js",
      "src/quickRegions.js",    
      "src/contextMenu.js",
      "src/maplayers.js",     
      "src/timeline.js",
      "src/O2C.js",
      "src/libs/jquery-gritter/js/jquery.gritter.js",
      "src/libs/jquery-contextMenu/js/jquery-contextMenu.js",
      "src/libs/jquery.multi-open-accordion-1.5.3.js",
      "src/libs/filtrify/js/filtrify.js",
      "src/libs/quicksand/js/quicksand.js"
   ],
   
   "externs": [
      "externs/externs.js",
      "externs/jQuery-1.8.2.js",
      "externs/jQuery-UI.js",
      "externs/OpenLayers.js",
      "externs/d3.js",
      "externs/Cesium.js"
   ],
   
   "mode": "SIMPLE",
   "level": "VERBOSE",
   "checks": {
      // acceptable values are "ERROR", "WARNING", and "OFF" 
      "deprecated": "WARNING",
      "checkTypes": "WARNING",
      "nonStandardJsDocs": "WARNING",
      "internetExplorerChecks": "WARNING",
      "invalidCasts": "ERROR",
      "missingProperties": "OFF"
   }
}