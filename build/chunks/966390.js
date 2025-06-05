/** Chunk was on 89129 **/
n.d(t, {
  Z: () => Z
}), n(388685), n(997841);
var i = n(570140),
  l = n(430742),
  r = n(904245),
  o = n(166459),
  c = n(531643),
  a = n(881052),
  d = n(673750),
  u = n(680287),
  s = n(247206),
  p = n(539573),
  _ = n(786761),
  f = n(3148),
  g = n(48854),
  m = n(785359),
  O = n(79390),
  b = n(980463),
  E = n(992970),
  y = n(576645),
  P = n(317951),
  h = n(287941),
  I = n(623292),
  T = n(807092),
  S = n(467798),
  D = n(703558),
  v = n(117530),
  A = n(62817),
  w = n(630388),
  C = n(226351),
  L = n(981631),
  U = n(388032);

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = {
  uploadFiles: async function(e) {
    var t, n, A, Z;
    let M, {
        channelId: F,
        uploads: B,
        draftType: x,
        parsedMessage: N,
        options: k = {},
        raiseEndpointErrors: G = !1
      } = e,
      z = new u.Z(L.ANM.MESSAGES(F)),
      K = new C.o,
      X = {
        content: "",
        nonce: "",
        channel_id: F,
        type: L.uaV.DEFAULT,
        sticker_ids: null == k ? void 0 : k.stickerIds,
        poll: null == k ? void 0 : k.poll,
        confetti_potion: (0, y.vY)(null == k ? void 0 : k.confettiPotionData),
        scheduled_timestamp: null == k ? void 0 : k.scheduledTimestamp
      };
    null != N && (X.content = null == N ? void 0 : N.content), null != T.Z.getPendingReply(F) && (X.type = L.uaV.REPLY, X.message_reference = k.messageReference, X.allowed_mentions = k.allowedMentions, (0, I.A6)(F));
    let [V, H] = (0, S.Z)(X.content);
    V && (X.content = H, X.flags = (0, w.pj)(null != (n = X.flags) ? n : 0, L.iLy.SUPPRESS_NOTIFICATIONS));
    let J = null != (A = k.nonce) ? A : (0, g.r)(),
      q = (0, f.ZP)({
        channelId: F,
        content: X.content,
        tts: null != (Z = null == N ? void 0 : N.tts) && Z,
        type: X.type,
        messageReference: X.message_reference,
        flags: X.flags,
        nonce: J,
        poll: (0, O.x9)(k.poll)
      });
    return X.nonce = J, z.on("start", e => {
      M = (0, _.e5)(R(j({}, q), {
        id: e.id
      })), i.Z.dispatch({
        type: "UPLOAD_START",
        channelId: F,
        file: e,
        message: M,
        uploader: z
      })
    }), z.on("progress", e => {
      i.Z.dispatch({
        type: "UPLOAD_PROGRESS",
        channelId: F,
        file: e
      })
    }), z.on("error", (e, t, n, u) => {
      if (i.Z.dispatch({
          type: "UPLOAD_FAIL",
          channelId: F,
          file: e,
          messageId: null == M ? void 0 : M.id
        }), (0, m.x)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == u ? void 0 : u.msg
        }), t === L.evJ.EXPLICIT_CONTENT) return void r.Z.sendExplicitMediaClydeError(F, null == n ? void 0 : n.attachments, s.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
      if (t === L.evJ.AUTOMOD_MESSAGE_BLOCKED) {
        let e = {
            code: t,
            message: null == n ? void 0 : n.message
          },
          i = null == M ? null : {
            type: d.$V.SEND,
            message: R(j({}, M), {
              channelId: F
            })
          };
        (0, c.openUploadError)({
          title: U.intl.string(U.t.B3vFdX),
          help: (0, p.uF)(i, e)
        });
        return
      }
      if (t !== L.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
        if (G) K.reject(new a.Hx({
          status: 400,
          body: null != n ? n : {}
        }, t));
        else {
          var _;
          (0, c.openUploadError)({
            title: U.intl.string(U.t.B3vFdX),
            help: null != (_ = null == n ? void 0 : n.message) ? _ : U.intl.string(U.t.zMEjJi)
          })
        }
        "" !== X.content && "" === D.Z.getDraft(F, x) && l.Z.saveDraft(F, X.content, x), 0 === v.Z.getUploadCount(F, x) && o.Z.setUploads({
          channelId: F,
          uploads: B,
          draftType: x
        })
      }
    }), z.on("complete", (e, t) => {
      i.Z.dispatch({
        type: "UPLOAD_COMPLETE",
        channelId: F,
        file: e,
        aborted: z._aborted
      });
      let n = (0, y.ZC)(t);
      null != n && ((0, b.gA)(P.D1), (0, h.I)({
        name: n.name,
        id: n.id
      }, void 0, !0, E.LL.MessageSent))
    }), null == k || null == (t = k.confettiPotionData) || t.callback(), await z.uploadFiles(B, X), K.resolve(), K.promise
  },
  cancel(e, t) {
    i.Z.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      channelId: e,
      file: t
    });
    let n = A.Z.getMessageForFile(t.id);
    null != n && "" === D.Z.getDraft(n.channel_id, D.d.ChannelMessage) && i.Z.dispatch({
      type: "DRAFT_SAVE",
      channelId: n.channel_id,
      draft: n.content,
      draftType: D.d.ChannelMessage
    })
  }
}