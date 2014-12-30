chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'kraknWindow',
    bounds: {
      width: 400,
      height: 650,
      left: 100,
      top: 100
    },
    minWidth: 400,
    minHeight: 650
  });
});