/** Chunk was on 53682 **/
/** chunk id: 739980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk954654 = require("./954654.js"),
  Chunk937889 = require("./937889.js"),
  Chunk930282 = require("./930282.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk136831 = require("./136831.js");

function d(e) {
  let {
    previewMessage: t
  } = e, n = u.jU.useSetting(), {
    content: d
  } = (0, a.ZP)(t, {
    allowHeading: true,
    allowLinks: true
  }), f = t.attachments.map((e, t) => {
    let n = (0, o.Yi)({
      src: e.url,
      containerClassName: c.previewImage,
      imageContainerClassName: c.previewImage,
      height: true !== e.height ? e.height : 200,
      width: true !== e.width ? e.width : 200,
      maxHeight: 200,
      maxWidth: 200,
      analyticsSource: "ApplicationCommandSharePreview"
    });
    return <r.Fragment>{n}</r.Fragment>
  });
  return <div className={c.previewContainer}>{<div className={c.quote} />}{<div className={c.content}>{<s.ZP message={t} content={d} compact={n} />}{f}{t.components.length > 0 ? <i.ZP message={t} shouldDisableInteractiveComponents={true} /> : null}</div>}</div>
}