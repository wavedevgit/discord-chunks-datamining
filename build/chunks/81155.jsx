/** Chunk was on 64648 **/
/** chunk id: 81155, original params: t,e,o (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk690221 = require("./690221.js"),
  Chunk460181 = require("./460181.js"),
  Chunk388032 = require("./388032.js"),
  Chunk835362 = require("./835362.js");
let c = [{
  preBold: "That's pretty...",
  bold: "fly!"
}, {
  preBold: "On Point will make sure to",
  bold: " tick ",
  postBold: "a look at it!"
}, {
  preBold: "You're...un",
  bold: "bee ",
  postBold: "lievable!"
}];

function p(t) {
  let {
    punConfig: e
  } = t;
  return <l.Fragment>{e.preBold}{<b><i>{e.bold}</i></b>}{e.postBold}</l.Fragment>
}

function b(t) {
  let {
    transitionState: e,
    onClose: o,
    asanaTask: b
  } = t;
  n.useEffect(() => {
    (0, i.GN)("success", .1)
  }, []);
  let m = n.useRef(c[Math.floor(Math.random() * c.length)]).current;
  return <s.Y0X className={u.bugReporterSubmitModalRoot} transitionState={e} aria-label={d.intl.string(d.t.mCCdws)} parentComponent={"BugReporterSubmitModal"}><s.hzk style={{
        overflow: "hidden",
        paddingRight: "0px"
      }} className={u.modalContent} paddingFix={false}>{<s.olH onClick={() => {
          null == o || o()
        }} className={u.closeButton} />}{<s.Text className={u.submitText} variant={"text-sm/normal"}>{"Thanks for submitting a "}{<r.Z onClick={() => (0, a.Z)(b.permalink_url)}>{"bug"}</r.Z>}{"!"}{<br />}{<p punConfig={m} />}</s.Text>}</s.hzk></s.Y0X>
}