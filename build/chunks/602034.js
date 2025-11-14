/** Chunk was on 91053 **/
/** chunk id: 602034, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  r: () => y
});
var Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
  Chunk430742 = require("./430742.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk531643 = require("./531643.jsx"),
  Chunk680287 = require("./680287.js"),
  Chunk470623 = require("./470623.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk928477 = require("./928477.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: c,
    location: d,
    onThreadCreated: b,
    useDefaultThreadName: _
  } = e, y = r.useCallback((e, t, n, r) => {
    a.Z.sendMessage(e.id, u.ZP.parse(e, n), true, {
      eagerDispatch: false,
      location: g.dy.THREAD_CREATION,
      stickerIds: r,
      attachmentsToUpload: t,
      onAttachmentUploadError: (r, i, a, c) => {
        var d;
        (0, o.openUploadError)({
          title: m.intl.string(m.t.B3vFdU),
          help: null != (d = null == c ? true : c.message) ? d : m.intl.string(m.t.zMEjJg)
        }), "" !== n && "" === p.Z.getDraft(e.id, p.d.FirstThreadMessage) && l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage), 0 === h.Z.getUploadCount(e.id, p.d.FirstThreadMessage) && s.Z.setUploads({
          channelId: e.id,
          uploads: t,
          draftType: p.d.FirstThreadMessage
        })
      }
    })
  }, []);
  return (0, f.JA)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: c,
    location: d,
    onThreadCreated: b,
    useDefaultThreadName: _,
    uploadHandler: y
  })
}
async function _(e) {
  let t = new c.Z,
    n = await t.uploadFiles(e);
  return {
    uploaderFile: t._file,
    files: n
  }
}

function y(e) {
  let {
    parentChannel: t
  } = e, {
    name: n,
    appliedTags: r
  } = (0, d.xH)(e => {
    let {
      name: t,
      appliedTags: n
    } = e;
    return {
      name: t,
      appliedTags: n
    }
  }, i.X);
  return (0, f.Wj)({
    parentChannel: t,
    name: n,
    appliedTags: r,
    upload: _
  })
}