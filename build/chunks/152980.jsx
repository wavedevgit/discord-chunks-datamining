/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk205822 = require("./205822.js"),
  Chunk476326 = require("./476326.js"),
  Chunk377171 = require("./377171.js"),
  Chunk313201 = require("./313201.js"),
  Chunk374794 = require("./374794.js"),
  Chunk587123 = require("./587123.js"),
  Chunk863663 = require("./863663.js"),
  Chunk731994 = require("./731994.js"),
  Chunk629481 = require("./629481.js"),
  Chunk388032 = require("./388032.js"),
  Chunk48635 = require("./48635.js");
let b = (0, Chunk313201.hQ)();

function v(e) {
  var t;
  let {
    upload: A,
    progress: l = 0,
    onDeleteAttachment: s
  } = e, d = r.useCallback(() => {
    null == s || s(A.id)
  }, [s, A.id]), u = l >= 1, f = l < 0, g = u || f, m = null != (t = A.filename) ? t : A.id, h = (0, p.kg)(l);
  return <i.DY3 text={h}><div className={a()(q.attachedFileCard, {
        [q.attachedFileCardError]: f,
        [q.attachedFileCardUploading]: !g
      })}>{<i.ZKT size={"xs"} color={c.Z.INTERACTIVE_MUTED} />}{<i.LZC size={10} horizontal={true} />}{<i.Text variant={"text-sm/normal"}>{m}</i.Text>}{!g && <i.$jN className={q.attachedFileCardSpinner} type={i.$jN.Type.SPINNING_CIRCLE} />}{g && null != s && <o.zx aria-label={C.intl.formatToPlainString(C.t["1o5hyc"], {
          attachment: m
        })} className={q.deleteButton} innerClassName={q.deleteButtonInner} look={o.zx.Looks.BLANK} size={o.zx.Sizes.NONE} onClick={d}><i.Dio size={"xxs"} color={"currentColor"} className={q.__invalid_deleteIcon} /></o.zx>}</div></i.DY3>
}

function x(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: l,
    canAttachArchives: a,
    addAttachment: c,
    deleteAttachment: u,
    fileUploadProgresses: p
  } = (0, g.P)(), x = r.useRef(false);

  function j(e) {
    try {
      for (let t of e) c({
        platform: d.ow.WEB,
        file: t,
        origin: "unknown:guild_product_attachment"
      });
      x.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    x.current && (t(), x.current = false)
  }, [t]), <div className={q.container}>{<s.Z className={q.uploadArea} title={C.intl.string(C.t["5eTk2t"])} description={C.intl.string(C.t.Ecxoxs)} icons={m.J6} onDrop={j} />}{<f.Z className={q.addFileButtonLook} innerClassName={q.addFileButton} color={o.zx.Colors.CUSTOM} disabled={!l} aria-label={C.intl.string(C.t["23LeCA"])} aria-describedby={b} multiple={true} onChange={function(e) {
        null != e.currentTarget.files && j(e.currentTarget.files)
      }}>{<i.dZu size={"xs"} color={"currentColor"} className={q.addFileButtonIcon} aria-hidden={true} />}{<i.Text variant={"text-sm/medium"} color={"always-white"}>{C.intl.string(C.t["23LeCA"])}</i.Text>}</f.Z>}{<i.LZC size={12} />}{<i.Text id={b} color={"text-muted"} variant={"text-xs/normal"}>{a ? C.intl.formatToPlainString(C.t.lvU6sr, {
        fileUploadLimit: h.TR
      }) : C.intl.formatToPlainString(C.t.DOXzIS, {
        fileUploadLimit: h.TR
      })}</i.Text>}{A.length > 0 && <n.Fragment>{<div className={q.separator} />}{<ul className={q.attachedFilesContainer} aria-label={C.intl.string(C.t.YZ6cTU)}>{A.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(v, {
            upload: e,
            onDeleteAttachment: u,
            progress: p[e.id]
          })
        }, e.id))}</ul>}</n.Fragment>}</div>
}