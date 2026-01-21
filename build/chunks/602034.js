/** Chunk was on 82124 **/
/** chunk id: 602034, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  r: () => v
});
var Chunk473749 = require("./473749.js"),
  Chunk782425 = require("./782425.js"),
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
  } = e, v = r.useCallback((e, t, n, r) => {
    a.Z.sendMessage(e.id, d.ZP.parse(e, n), true, {
      eagerDispatch: false,
      location: g.dy.THREAD_CREATION,
      stickerIds: r,
      attachmentsToUpload: t,
      onAttachmentUploadError: (r, i, a, c) => {
        var u;
        (0, s.openUploadError)({
          title: m.intl.string(m.t.B3vFdU),
          help: null != (u = null == c ? true : c.message) ? u : m.intl.string(m.t.zMEjJg)
        }), "" !== n && "" === p.Z.getDraft(e.id, p.d.FirstThreadMessage) && l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage), 0 === f.Z.getUploadCount(e.id, p.d.FirstThreadMessage) && o.Z.setUploads({
          channelId: e.id,
          uploads: t,
          draftType: p.d.FirstThreadMessage
        })
      }
    })
  }, []);
  return (0, h.JA)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: c,
    location: u,
    onThreadCreated: b,
    useDefaultThreadName: y,
    uploadHandler: v
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

function v(e) {
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
  return (0, h.Wj)({
    parentChannel: t,
    name: n,
    appliedTags: r,
    upload: y
  })
}