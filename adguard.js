

var body = $response.body.replace(
  /<head>/,
  `<head>
    <style>
      .module-adslist, 
      .player-rm > a[target="_blank"],
      .popupShow,
      .container-slide{
        display: none !important;
      }
    </style>`
);
$done({ body });
