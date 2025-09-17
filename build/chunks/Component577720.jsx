/** Chunk was on web.js **/
/** chunk id: 577720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk981631 = require("./981631.js"),
  Chunk739802 = require("./739802.js");
class c extends Chunk647438.Component {
  render() {
    let {
      className: e,
      videoID: t,
      videoClassName: n
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: o()(module, Chunk739802.videoWrapper),
      children: (0, Chunk951288.jsx)("iframe", {
        className: o()(require, Chunk739802.video),
        src: "https://www.youtube.com/embed/".concat(exports, "?rel=0&showinfo=0&controls=1&origin=https://").concat(Chunk981631.$R1),
        allowFullScreen: true,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}