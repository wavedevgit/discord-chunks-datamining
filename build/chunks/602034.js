/** Chunk was on 68197 **/
/** chunk id: 602034, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  r: () => _
});
var Chunk647438 = require("./647438.js"),
  Chunk524825 = require("./524825.js"),
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
    location: u,
    onThreadCreated: b,
    useDefaultThreadName: y
  } = e, _ = r.useCallback((e, t, n, r) => {
    a.Z.sendMessage(e.id, d.ZP.parse(e, n), true, {
      eagerDispatch: false,
      location: m.dy.THREAD_CREATION,
      stickerIds: r,
      attachmentsToUpload: t,
      onAttachmentUploadError: (r, i, a, c) => {
        var u;
        (0, s.openUploadError)({
          title: g.intl.string(g.t.B3vFdX),
          help: null != (u = null == c ? true : c.message) ? u : g.intl.string(g.t.zMEjJi)
        }), "" !== n && "" === p.Z.getDraft(e.id, p.d.FirstThreadMessage) && l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage), 0 === h.Z.getUploadCount(e.id, p.d.FirstThreadMessage) && o.Z.setUploads({
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
    location: u,
    onThreadCreated: b,
    useDefaultThreadName: y,
    uploadHandler: _
  })
}
async function y(e) {
  let t = new c.Z,
    n = await t.uploadFiles(e);
  return {
    uploaderFile: t._file,
    files: n
  }
}

function _(e) {
  let {
    parentChannel: t
  } = e, {
    name: n,
    appliedTags: r
  } = (0, u.xH)(e => {
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
    upload: y
  })
}