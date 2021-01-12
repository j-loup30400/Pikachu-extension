chrome.contextMenus.create({
  title: "RubberDuck",
  contexts: ["selection"],
  onclick: openTab(),
});
