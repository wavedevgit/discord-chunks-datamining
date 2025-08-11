/** Chunk was on web.js **/
/** chunk id: 40330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  p: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk112456 = require("./112456.js"),
  s = require.n(Chunk112456),
  Chunk481060 = require("./481060.js"),
  Chunk403182 = require("./403182.js"),
  Chunk388032 = require("./388032.js"),
  Chunk634690 = require("./634690.js");
let f = e => {
    let {
      filename: t
    } = e, i = (0, c.uV)(t), o = n(148660)("./icon-file-".concat(i, ".svg"));
    return <img className={d.icon} src={o} alt={u.intl.formatToPlainString(u.t.g6KdFh, {
        fileType: i
      })} title={i} />
  },
  _ = e => {
    let {
      filename: t,
      size: n,
      progress: i,
      onCancelUpload: o,
      onClick: a,
      onContextMenu: c
    } = e, _ = 100 === i, p = !_ && n > 0;
    return <div className={d.fileWrapper}><div className={d.file}>{<f filename={t} />}{<div className={d.fileInner}>{<div className={d.filenameWrapper}>{<l.P3F className={d.filename} onClick={a} onContextMenu={c}>{t}</l.P3F>}{p ? <div className={d.size}>{"— ".concat(s().filesize(n))}</div> : null}</div>}{<div className={d.progressContainer}>{_ ? u.intl.string(u.t.jfKTen) : (0, r.jsx)(l.Exd, {
              className: d.progress,
              percent: i
            })}</div>}</div>}{_ ? null : <l.P3F onClick={o}><l.Dio size={"md"} color={"currentColor"} className={d.cancelButton} /></l.P3F>}</div></div>
  },
  p = e => {
    let {
      className: t,
      url: n,
      fileName: i,
      fileSize: a,
      onClick: c,
      onContextMenu: u,
      renderAdjacentContent: _
    } = e;
    return <div className={o()(d.fileWrapper, t)}>{<div className={d.file}>{<f filename={i} />}{<div className={d.fileInner}>{<div className={d.filenameLinkWrapper}><l.eee className={d.fileNameLink} href={n} onClick={c} onContextMenu={u}>{i}</l.eee></div>}{<l.Text variant={"text-xs/normal"} color={"text-muted"}>{s().filesize(a)}</l.Text>}</div>}</div>}{null != _ && _()}</div>
  }