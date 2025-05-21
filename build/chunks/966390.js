/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => j
}), n(388685), n(997841);
var r = n(570140),
  i = n(430742),
  o = n(904245),
  a = n(166459),
  s = n(531643),
  l = n(881052),
  c = n(673750),
  u = n(680287),
  d = n(247206),
  f = n(539573),
  _ = n(786761),
  p = n(3148),
  h = n(48854),
  m = n(785359),
  g = n(79390),
  E = n(980463),
  b = n(992970),
  y = n(576645),
  O = n(317951),
  v = n(287941),
  I = n(623292),
  S = n(807092),
  T = n(467798),
  A = n(703558),
  N = n(117530),
  C = n(62817),
  P = n(630388),
  R = n(226351),
  w = n(981631),
  D = n(388032);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = {
  uploadFiles: async function(e) {
    var t, n, C, L;
    let k, {
        channelId: j,
        uploads: U,
        draftType: G,
        parsedMessage: B,
        options: F = {},
        raiseEndpointErrors: V = !1
      } = e,
      Z = new u.Z(w.ANM.MESSAGES(j)),
      H = new R.o,
      Y = {
        content: "",
        nonce: "",
        channel_id: j,
        type: w.uaV.DEFAULT,
        sticker_ids: null == F ? void 0 : F.stickerIds,
        poll: null == F ? void 0 : F.poll,
        confetti_potion: (0, y.vY)(null == F ? void 0 : F.confettiPotionData),
        scheduled_timestamp: null == F ? void 0 : F.scheduledTimestamp
      };
    null != B && (Y.content = null == B ? void 0 : B.content), null != S.Z.getPendingReply(j) && (Y.type = w.uaV.REPLY, Y.message_reference = F.messageReference, Y.allowed_mentions = F.allowedMentions, (0, I.A6)(j));
    let [W, K] = (0, T.Z)(Y.content);
    W && (Y.content = K, Y.flags = (0, P.pj)(null != (n = Y.flags) ? n : 0, w.iLy.SUPPRESS_NOTIFICATIONS));
    let z = null != (C = F.nonce) ? C : (0, h.r)(),
      q = (0, p.ZP)({
        channelId: j,
        content: Y.content,
        tts: null != (L = null == B ? void 0 : B.tts) && L,
        type: Y.type,
        messageReference: Y.message_reference,
        flags: Y.flags,
        nonce: z,
        poll: (0, g.x9)(F.poll)
      });

    function Q() {
      "" !== Y.content && "" === A.Z.getDraft(j, G) && i.Z.saveDraft(j, Y.content, G), 0 === N.Z.getUploadCount(j, G) && a.Z.setUploads({
        channelId: j,
        uploads: U,
        draftType: G
      })
    }
    return Y.nonce = z, Z.on("start", e => {
      k = (0, _.e5)(M(x({}, q), {
        id: e.id
      })), r.Z.dispatch({
        type: "UPLOAD_START",
        channelId: j,
        file: e,
        message: k,
        uploader: Z
      })
    }), Z.on("progress", e => {
      r.Z.dispatch({
        type: "UPLOAD_PROGRESS",
        channelId: j,
        file: e
      })
    }), Z.on("error", (e, t, n, i) => {
      if (r.Z.dispatch({
          type: "UPLOAD_FAIL",
          channelId: j,
          file: e,
          messageRecord: k
        }), (0, m.x)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == i ? void 0 : i.msg
        }), t === w.evJ.EXPLICIT_CONTENT) return void o.Z.sendExplicitMediaClydeError(j, null == n ? void 0 : n.attachments, d.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
      if (t === w.evJ.AUTOMOD_MESSAGE_BLOCKED) {
        let e = {
            code: t,
            message: null == n ? void 0 : n.message
          },
          r = null == k ? null : {
            type: c.$V.SEND,
            message: M(x({}, k), {
              channelId: j
            })
          };
        (0, s.openUploadError)({
          title: D.intl.string(D.t.B3vFdX),
          help: (0, f.uF)(r, e)
        });
        return
      }
      if (t !== w.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
        if (V) H.reject(new l.Hx({
          status: 400,
          body: null != n ? n : {}
        }, t));
        else {
          var a;
          (0, s.openUploadError)({
            title: D.intl.string(D.t.B3vFdX),
            help: null != (a = null == n ? void 0 : n.message) ? a : D.intl.string(D.t.zMEjJi)
          })
        }
        Q()
      }
    }), Z.on("complete", (e, t) => {
      r.Z.dispatch({
        type: "UPLOAD_COMPLETE",
        channelId: j,
        file: e,
        aborted: Z._aborted,
        messageRecord: t
      });
      let n = (0, y.ZC)(t);
      null != n && ((0, E.gA)(O.D1), (0, v.I)({
        name: n.name,
        id: n.id
      }, void 0, !0, b.LL.MessageSent))
    }), null == F || null == (t = F.confettiPotionData) || t.callback(), await Z.uploadFiles(U, Y), H.resolve(), H.promise
  },
  cancel(e, t) {
    r.Z.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      channelId: e,
      file: t
    });
    let n = C.Z.getMessageForFile(t.id);
    null != n && "" === A.Z.getDraft(n.channel_id, A.d.ChannelMessage) && r.Z.dispatch({
      type: "DRAFT_SAVE",
      channelId: n.channel_id,
      draft: n.content,
      draftType: A.d.ChannelMessage
    })
  }
}