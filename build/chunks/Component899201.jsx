/** Chunk was on 4530 **/
/** chunk id: 899201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => V
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
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239198 = require("./239198.js");

function V(e) {
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
  let O = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
  (0, I.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: r,
      activity_session_id: null == O ? true : O.compositeInstanceId
    }
  });
  let [j] = (0, y.Z)([r]), P = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()), [U, k] = i.useState(""), [V, K] = i.useState([]), [Q, Y] = i.useState(null), [W, X] = i.useState(null), [J, $] = i.useState(false);
  i.useEffect(() => {
    (async () => {
      let e = M.Z.toURLSafe(l);
      if (null == e) return;
      let t = o().basename(e.pathname),
        n = await fetch(l),
        a = new File([await n.arrayBuffer()], t);
      Y(a);
      let i = new FileReader;
      i.onload = () => {
        var e;
        return X(null == i || null == (e = i.result) ? true : e.toString())
      }, i.readAsDataURL(a)
    })()
  }, [l, Y]);
  let ee = (0, d.Wu)([N.Z, C.Z], () => N.Z.getInviteSuggestionRows().filter(e => e.type === D.bm.FRIEND || e.type === D.bm.DM || C.Z.can(F.Plq.ATTACH_FILES, e.item)));
  i.useEffect(() => {
    (0, f.x)({
      omitUserIds: new Set,
      applicationId: r,
      inviteTargetType: G.Iq.EMBEDDED_APPLICATION
    })
  }, [r]), i.useEffect(() => (0, f.C)(U), [U]), i.useEffect(() => {
    let e;
    return J && (e = setTimeout(() => {
      $(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [J]);
  let et = i.useCallback(async () => {
      await s()
    }, [s]),
    en = i.useCallback(async () => {
      A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
        user_id: null == P ? true : P.id,
        application_id: r,
        activity_session_id: null == O ? true : O.compositeInstanceId
      }), await R.ZP.copyImage(l), $(true)
    }, [null == O ? true : O.compositeInstanceId, r, l, null == P ? true : P.id]),
    ea = i.useCallback(async () => {
      let e = 0,
        t = 0,
        n = 0;
      async function a(a) {
        let i;
        switch (a.type) {
          case D.bm.DM:
          case D.bm.FRIEND:
            i = await p.Z.ensurePrivateChannel(a.id), e++;
            break;
          case D.bm.GROUP_DM:
            i = a.id, t++;
            break;
          case D.bm.CHANNEL:
            i = a.id, n++;
            break;
          default:
            return
        }
        let l = E.Z.getChannel(i);
        if (null != Q) {
          let e = new File([Q], Q.name, {
            type: Q.type
          });
          b.Z.addFile({
            file: {
              file: e,
              platform: h.ow.WEB,
              origin: "unknown:activity_share"
            },
            channelId: i,
            draftType: T.d.ChannelMessage
          })
        }
        let s = x.Z.getUploads(i, T.d.ChannelMessage);
        g.Z.sendMessage(i, null != j ? v.ZP.parse(l, B.intl.formatToPlainString(B.t.jQULqK, {
          applicationName: "**".concat(j.name, "**")
        })) : {
          content: "",
          tts: false,
          invalidEmojis: [],
          validNonShortcutEmojis: []
        }, false, {
          eagerDispatch: false,
          location: q.dy.ACTIVITY_SHARE,
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
        }), b.Z.clearAll(i, T.d.ChannelMessage)
      }
      let i = V.map(e => a(e));
      A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == P ? true : P.id,
        application_id: r,
        activity_session_id: null == O ? true : O.compositeInstanceId,
        n_users: e,
        n_gdms: t,
        n_channels: n
      });
      try {
        await Promise.all(i), null != j && (0, m.showToast)((0, m.createToast)(B.intl.formatToPlainString(B.t.jQULqK, {
          applicationName: j.name
        }), m.ToastType.SUCCESS))
      } catch (e) {
        throw (0, m.showToast)((0, m.createToast)(B.intl.string(B.t.PanA4O), m.ToastType.FAILURE)), e
      }
      et()
    }, [O, j, r, V, Q, et, P]),
    ei = e => {
      let t = () => {
        if (false !== V.findIndex(t => t.id === e.item.id)) K(V.filter(t => t.id !== e.item.id));
        else {
          if (V.length >= 10) return;
          null != Q && K([...V, {
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
    onClose: et,
    size: "md",
    title: B.intl.string(B.t.r9qKo6),
    input: (0, a.jsx)(m.Rj2, {
      className: H.searchBar,
      placeholder: B.intl.string(B.t["5h0QOD"]),
      label: B.intl.string(B.t["5h0QOD"]),
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
        className: H.previewImage
      }), V.length >= 10 ? (0, a.jsx)(m.Text, {
        variant: "text-xs/normal",
        children: B.intl.format(B.t.mdE9iI, {
          maxShares: 10
        })
      }) : null]
    }),
    actions: [...R.ZP.canCopyImage(l) ? [{
      text: J ? B.intl.string(B.t["t5VZ8/"]) : B.intl.string(B.t.tvUqWl),
      onClick: en,
      variant: "secondary",
      disabled: J
    }] : [], {
      text: B.intl.string(B.t.TXNS7e),
      onClick: ea,
      variant: "primary",
      disabled: V.length <= 0
    }]
  }, _), n = n = {
    children: ee.map((e, t) => (0, a.jsxs)(i.Fragment, {
      children: [0 === t ? null : (0, a.jsx)("div", {
        className: H.rowDivider
      }), (0, a.jsx)(z, {
        row: e,
        onClick: ei(e),
        checked: V.some(t => t.id === e.item.id),
        disabled: !V.some(t => t.id === e.item.id) && V.length >= 10
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

function z(e) {
  let {
    row: t,
    onClick: n,
    checked: i,
    disabled: r
  } = e, s = null, o = null, c = null;
  switch (t.type) {
    case D.bm.DM:
    case D.bm.FRIEND:
      s = (0, a.jsx)(m.qEK, {
        size: m.EFr.SIZE_40,
        src: t.item.getAvatarURL(null, 128, false),
        "aria-label": t.item.username
      }), o = k.ZP.getName(t.item), c = k.ZP.getUserTag(t.item);
      break;
    case D.bm.GROUP_DM: {
      let e = (0, w.x)(t.item),
        n = (0, _.F6)(t.item, Z.default, j.Z);
      s = (0, a.jsx)(m.qEK, {
        src: e,
        "aria-label": n,
        size: m.EFr.SIZE_40
      }), o = (0, _.F6)(t.item, Z.default, j.Z);
      break
    }
    case D.bm.CHANNEL: {
      let e = t.item,
        n = O.Z.getGuild(e.guild_id);
      if (null == n) return null;
      if (o = "#".concat((0, _.F6)(e, Z.default, j.Z)), c = n.name, null != n.icon) {
        let t = P.ZP.getGuildIconURL({
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
          className: H.acronym,
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
    className: l()(H.rowContainer, {
      [H.disabled]: r
    }),
    children: [(0, a.jsxs)("div", {
      className: H.rowLeft,
      children: [(0, a.jsx)("div", {
        className: H.rowAvatar,
        children: s
      }), (0, a.jsxs)("div", {
        className: H.rowNameContainer,
        children: [(0, a.jsx)(m.Text, {
          variant: "text-md/semibold",
          className: l()(H.rowName, {
            [H.disabled]: r
          }),
          children: o
        }), (0, a.jsx)(m.Text, {
          variant: "text-xs/medium",
          className: l()(H.rowSubName, {
            [H.disabled]: r
          }),
          children: c
        })]
      })]
    }), (0, a.jsx)(m.XZJ, {
      disabled: r,
      value: i,
      type: m.XZJ.Types.INVERTED,
      displayOnly: true,
      className: H.rowRight
    })]
  })
}