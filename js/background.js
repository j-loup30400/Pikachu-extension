chrome.contextMenus.create({
  title: "Be Poodle",
  contexts: ["selection"],
  onclick: openTab(),
});
