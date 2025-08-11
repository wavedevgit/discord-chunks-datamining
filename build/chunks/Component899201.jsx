/** Chunk was on 4530 **/
/** chunk id: 899201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk218887 = require("./218887.js"),
  o = require.n(Chunk218887),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk247272 = require("./247272.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk476326 = require("./476326.js"),
  Chunk213609 = require("./213609.js"),
  Chunk835473 = require("./835473.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk58873 = require("./58873.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk751771 = require("./751771.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk971130 = require("./971130.js"),
  Chunk624138 = require("./624138.js"),
  Chunk591759 = require("./591759.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk317381 = require("./317381.js"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239198 = require("./239198.js");

function H(e) {
  var t, n, {
      applicationId: r,
      mediaUrl: l,
      onClose: s,
      transitionState: w
    } = e,
    _ = function(e, t) {
      if (null == e) return {};
      var n, a, i = function(e, t) {
        if (null == e) return {};
        var n, a, i = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]);
  let T = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
  (0, y.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: r,
      activity_session_id: null == T ? true : T.compositeInstanceId
    }
  });
  let [j] = (0, I.Z)([r]), D = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()), [U, k] = i.useState(""), [H, z] = i.useState([]), [K, Q] = i.useState(null), [W, X] = i.useState(null), [Y, J] = i.useState(false);
  i.useEffect(() => {
    (async () => {
      let e = M.Z.toURLSafe(l);
      if (null == e) return;
      let t = o().basename(e.pathname),
        n = await fetch(l),
        a = new File([await n.arrayBuffer()], t);
      Q(a);
      let i = new FileReader;
      i.onload = () => {
        var e;
        return X(null == i || null == (e = i.result) ? true : e.toString())
      }, i.readAsDataURL(a)
    })()
  }, [l, Q]);
  let $ = (0, d.Wu)([N.Z, C.Z], () => N.Z.getInviteSuggestionRows().filter(e => e.type === A.bm.FRIEND || e.type === A.bm.DM || C.Z.can(F.Plq.ATTACH_FILES, e.item)));
  i.useEffect(() => {
    (0, f.x)({
      omitUserIds: new Set,
      applicationId: r,
      inviteTargetType: G.Iq.EMBEDDED_APPLICATION
    })
  }, [r]), i.useEffect(() => (0, f.C)(U), [U]), i.useEffect(() => {
    let e;
    return Y && (e = setTimeout(() => {
      J(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [Y]);
  let ee = i.useCallback(async () => {
      await s()
    }, [s]),
    et = i.useCallback(async () => {
      P.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
        user_id: null == D ? true : D.id,
        application_id: r,
        activity_session_id: null == T ? true : T.compositeInstanceId
      }), await R.ZP.copyImage(l), J(true)
    }, [null == T ? true : T.compositeInstanceId, r, l, null == D ? true : D.id]),
    en = i.useCallback(async () => {
      let e = 0,
        t = 0,
        n = 0;
      async function a(a) {
        let i;
        switch (a.type) {
          case A.bm.DM:
          case A.bm.FRIEND:
            i = await p.Z.ensurePrivateChannel(a.id), e++;
            break;
          case A.bm.GROUP_DM:
            i = a.id, t++;
            break;
          case A.bm.CHANNEL:
            i = a.id, n++;
            break;
          default:
            return
        }
        let l = E.Z.getChannel(i);
        if (null != K) {
          let e = new File([K], K.name, {
            type: K.type
          });
          b.Z.addFile({
            file: {
              file: e,
              platform: h.ow.WEB,
              origin: "unknown:activity_share"
            },
            channelId: i,
            draftType: O.d.ChannelMessage
          })
        }
        let s = x.Z.getUploads(i, O.d.ChannelMessage);
        g.Z.sendMessage(i, null != j ? v.ZP.parse(l, q.intl.formatToPlainString(q.t.jQULqK, {
          applicationName: "**".concat(j.name, "**")
        })) : {
          content: "",
          tts: false,
          invalidEmojis: [],
          validNonShortcutEmojis: []
        }, false, {
          eagerDispatch: false,
          applicationId: r,
          attachmentsToUpload: s,
          onAttachmentUploadError: (e, t, n) => {
            var a;
            (0, S.A)({
              file: e,
              guildId: null != (a = null == l ? true : l.getGuildId()) ? a : null,
              analyticsLocations: [],
              code: t,
              reason: n
            })
          }
        }), b.Z.clearAll(i, O.d.ChannelMessage)
      }
      let i = H.map(e => a(e));
      P.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == D ? true : D.id,
        application_id: r,
        activity_session_id: null == T ? true : T.compositeInstanceId,
        n_users: e,
        n_gdms: t,
        n_channels: n
      });
      try {
        await Promise.all(i), null != j && (0, m.showToast)((0, m.createToast)(q.intl.formatToPlainString(q.t.jQULqK, {
          applicationName: j.name
        }), m.ToastType.SUCCESS))
      } catch (e) {
        throw (0, m.showToast)((0, m.createToast)(q.intl.string(q.t.PanA4O), m.ToastType.FAILURE)), e
      }
      ee()
    }, [T, j, r, H, K, ee, D]),
    ea = e => {
      let t = () => {
        if (false !== H.findIndex(t => t.id === e.item.id)) z(H.filter(t => t.id !== e.item.id));
        else {
          if (H.length >= 10) return;
          null != K && z([...H, {
            id: e.item.id,
            type: e.type
          }])
        }
      };
      return () => t()
    };
  return null == W ? (0, a.jsx)(m.$jN, {}) : (0, a.jsx)(u.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    transitionState: w,
    onClose: ee,
    size: "md",
    title: q.intl.string(q.t.r9qKo6),
    input: (0, a.jsx)(m.Rj2, {
      className: B.searchBar,
      placeholder: q.intl.string(q.t["5h0QOD"]),
      label: q.intl.string(q.t["5h0QOD"]),
      searchTerm: U,
      onChange: e => k(e),
      onClear: () => k("")
    }),
    preview: (0, a.jsxs)(m.Kqy, {
      direction: "vertical",
      align: "center",
      gap: 12,
      children: [(0, a.jsx)("img", {
        alt: l,
        src: W,
        className: B.previewImage
      }), H.length >= 10 ? (0, a.jsx)(m.Text, {
        variant: "text-xs/normal",
        children: q.intl.format(q.t.mdE9iI, {
          maxShares: 10
        })
      }) : null]
    }),
    actions: [...R.ZP.canCopyImage(l) ? [{
      text: Y ? q.intl.string(q.t["t5VZ8/"]) : q.intl.string(q.t.tvUqWl),
      onClick: et,
      variant: "secondary",
      disabled: Y
    }] : [], {
      text: q.intl.string(q.t.TXNS7e),
      onClick: en,
      variant: "primary",
      disabled: H.length <= 0
    }]
  }, _), n = n = {
    children: $.map((e, t) => (0, a.jsxs)(i.Fragment, {
      children: [0 === t ? null : (0, a.jsx)("div", {
        className: B.rowDivider
      }), (0, a.jsx)(V, {
        row: e,
        onClick: ea(e),
        checked: H.some(t => t.id === e.item.id),
        disabled: !H.some(t => t.id === e.item.id) && H.length >= 10
      })]
    }, e.item.id))
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function V(e) {
  let {
    row: t,
    onClick: n,
    checked: i,
    disabled: r
  } = e, s = null, o = null, c = null;
  switch (t.type) {
    case A.bm.DM:
    case A.bm.FRIEND:
      s = (0, a.jsx)(m.qEK, {
        size: m.EFr.SIZE_40,
        src: t.item.getAvatarURL(null, 128, false),
        "aria-label": t.item.username
      }), o = k.ZP.getName(t.item), c = k.ZP.getUserTag(t.item);
      break;
    case A.bm.GROUP_DM: {
      let e = (0, w.x)(t.item),
        n = (0, _.F6)(t.item, Z.default, j.Z);
      s = (0, a.jsx)(m.qEK, {
        src: e,
        "aria-label": n,
        size: m.EFr.SIZE_40
      }), o = (0, _.F6)(t.item, Z.default, j.Z);
      break
    }
    case A.bm.CHANNEL: {
      let e = t.item,
        n = T.Z.getGuild(e.guild_id);
      if (null == n) return null;
      if (o = "#".concat((0, _.F6)(e, Z.default, j.Z)), c = n.name, null != n.icon) {
        let t = D.ZP.getGuildIconURL({
          id: e.guild_id,
          icon: n.icon,
          size: 40
        });
        s = (0, a.jsx)(m.qEK, {
          src: t,
          "aria-label": o,
          size: m.EFr.SIZE_40
        })
      } else {
        let e = (0, U.Zg)(n.name);
        s = (0, a.jsx)("div", {
          className: B.acronym,
          "aria-hidden": true,
          children: (0, a.jsx)(m.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, a.jsxs)(m.P3F, {
    onClick: n,
    className: l()(B.rowContainer, {
      [B.disabled]: r
    }),
    children: [(0, a.jsxs)("div", {
      className: B.rowLeft,
      children: [(0, a.jsx)("div", {
        className: B.rowAvatar,
        children: s
      }), (0, a.jsxs)("div", {
        className: B.rowNameContainer,
        children: [(0, a.jsx)(m.Text, {
          variant: "text-md/semibold",
          className: l()(B.rowName, {
            [B.disabled]: r
          }),
          children: o
        }), (0, a.jsx)(m.Text, {
          variant: "text-xs/medium",
          className: l()(B.rowSubName, {
            [B.disabled]: r
          }),
          children: c
        })]
      })]
    }), (0, a.jsx)(m.XZJ, {
      disabled: r,
      value: i,
      type: m.XZJ.Types.INVERTED,
      displayOnly: true,
      className: B.rowRight
    })]
  })
}