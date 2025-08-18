/** Chunk was on 4530 **/
/** chunk id: 899201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk989201 = require("./989201.js");

function z(e) {
  var t, n, {
      applicationId: r,
      mediaUrl: l,
      onClose: s,
      transitionState: w
    } = e,
    S = function(e, t) {
      if (null == e) return {};
      var n, i, a = function(e, t) {
        if (null == e) return {};
        var n, i, a = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]);
  let O = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
  (0, y.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: r,
      activity_session_id: null == O ? true : O.compositeInstanceId
    }
  });
  let [j] = (0, h.Z)([r]), P = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()), [U, k] = a.useState(""), [z, K] = a.useState([]), [Q, Y] = a.useState(null), [W, X] = a.useState(null), [J, $] = a.useState(false);
  a.useEffect(() => {
    (async () => {
      let e = M.Z.toURLSafe(l);
      if (null == e) return;
      let t = o().basename(e.pathname),
        n = await fetch(l),
        i = new File([await n.arrayBuffer()], t);
      Y(i);
      let a = new FileReader;
      a.onload = () => {
        var e;
        return X(null == a || null == (e = a.result) ? true : e.toString())
      }, a.readAsDataURL(i)
    })()
  }, [l, Y]);
  let ee = (0, d.Wu)([N.Z, C.Z], () => N.Z.getInviteSuggestionRows().filter(e => e.type === D.bm.FRIEND || e.type === D.bm.DM || C.Z.can(F.Plq.ATTACH_FILES, e.item)));
  a.useEffect(() => {
    (0, g.x)({
      omitUserIds: new Set,
      applicationId: r,
      inviteTargetType: G.Iq.EMBEDDED_APPLICATION
    })
  }, [r]), a.useEffect(() => (0, g.C)(U), [U]), a.useEffect(() => {
    let e;
    return J && (e = setTimeout(() => {
      $(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [J]);
  let et = a.useCallback(async () => {
      await s()
    }, [s]),
    en = a.useCallback(async () => {
      A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
        user_id: null == P ? true : P.id,
        application_id: r,
        activity_session_id: null == O ? true : O.compositeInstanceId
      }), await R.ZP.copyImage(l), $(true)
    }, [null == O ? true : O.compositeInstanceId, r, l, null == P ? true : P.id]),
    ei = a.useCallback(async () => {
      let e = 0,
        t = 0,
        n = 0;
      async function i(i) {
        let a;
        switch (i.type) {
          case D.bm.DM:
          case D.bm.FRIEND:
            a = await p.Z.ensurePrivateChannel(i.id), e++;
            break;
          case D.bm.GROUP_DM:
            a = i.id, t++;
            break;
          case D.bm.CHANNEL:
            a = i.id, n++;
            break;
          default:
            return
        }
        let l = E.Z.getChannel(a);
        if (null != Q) {
          let e = new File([Q], Q.name, {
            type: Q.type
          });
          b.Z.addFile({
            file: {
              file: e,
              platform: I.ow.WEB,
              origin: "unknown:activity_share"
            },
            channelId: a,
            draftType: T.d.ChannelMessage
          })
        }
        let s = x.Z.getUploads(a, T.d.ChannelMessage);
        f.Z.sendMessage(a, null != j ? v.ZP.parse(l, H.intl.formatToPlainString(H.t.jQULqK, {
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
            var i;
            (0, _.A)({
              file: e,
              guildId: null != (i = null == l ? true : l.getGuildId()) ? i : null,
              analyticsLocations: [],
              code: t,
              reason: n
            })
          }
        }), b.Z.clearAll(a, T.d.ChannelMessage)
      }
      let a = z.map(e => i(e));
      A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == P ? true : P.id,
        application_id: r,
        activity_session_id: null == O ? true : O.compositeInstanceId,
        n_users: e,
        n_gdms: t,
        n_channels: n
      });
      try {
        await Promise.all(a), null != j && (0, m.showToast)((0, m.createToast)(H.intl.formatToPlainString(H.t.jQULqK, {
          applicationName: j.name
        }), m.ToastType.SUCCESS))
      } catch (e) {
        throw (0, m.showToast)((0, m.createToast)(H.intl.string(H.t.PanA4O), m.ToastType.FAILURE)), e
      }
      et()
    }, [O, j, r, z, Q, et, P]);
  return null == W ? (0, i.jsx)(m.$jN, {}) : (0, i.jsx)(u.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    transitionState: w,
    onClose: et,
    size: "md",
    title: H.intl.string(H.t.r9qKo6),
    input: (0, i.jsx)(m.E1j, {
      placeholder: H.intl.string(H.t["5h0QOD"]),
      "aria-label": H.intl.string(H.t["5h0QOD"]),
      query: U,
      onChange: e => k(e),
      onClear: () => k("")
    }),
    preview: (0, i.jsxs)(m.Kqy, {
      direction: "vertical",
      align: "center",
      gap: 12,
      children: [(0, i.jsx)("img", {
        alt: l,
        src: W,
        className: V.previewImage
      }), z.length >= 10 ? (0, i.jsx)(m.Text, {
        variant: "text-xs/normal",
        children: H.intl.format(H.t.mdE9iI, {
          maxShares: 10
        })
      }) : null]
    }),
    actions: [...R.ZP.canCopyImage(l) ? [{
      text: J ? H.intl.string(H.t["t5VZ8/"]) : H.intl.string(H.t.tvUqWl),
      onClick: en,
      variant: "secondary",
      disabled: J
    }] : [], {
      text: H.intl.string(H.t.TXNS7e),
      onClick: ei,
      variant: "primary",
      disabled: z.length <= 0
    }]
  }, S), n = n = {
    children: ee.map((e, t) => (0, i.jsxs)(a.Fragment, {
      children: [0 === t ? null : (0, i.jsx)("div", {
        className: V.rowDivider
      }), (0, i.jsx)(B, {
        row: e,
        onClick: () => (() => {
          if (false !== z.findIndex(t => t.id === e.item.id)) K(z.filter(t => t.id !== e.item.id));
          else {
            if (z.length >= 10) return;
            null != Q && K([...z, {
              id: e.item.id,
              type: e.type
            }])
          }
        })(),
        checked: z.some(t => t.id === e.item.id),
        disabled: !z.some(t => t.id === e.item.id) && z.length >= 10
      })]
    }, e.item.id))
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function B(e) {
  let {
    row: t,
    onClick: n,
    checked: a,
    disabled: r
  } = e, s = null, o = null, c = null;
  switch (t.type) {
    case D.bm.DM:
    case D.bm.FRIEND:
      s = (0, i.jsx)(m.qEK, {
        size: m.EFr.SIZE_40,
        src: t.item.getAvatarURL(null, 128, false),
        "aria-label": t.item.username
      }), o = k.ZP.getName(t.item), c = k.ZP.getUserTag(t.item);
      break;
    case D.bm.GROUP_DM: {
      let e = (0, w.x)(t.item),
        n = (0, S.F6)(t.item, Z.default, j.Z);
      s = (0, i.jsx)(m.qEK, {
        src: e,
        "aria-label": n,
        size: m.EFr.SIZE_40
      }), o = (0, S.F6)(t.item, Z.default, j.Z);
      break
    }
    case D.bm.CHANNEL: {
      let e = t.item,
        n = O.Z.getGuild(e.guild_id);
      if (null == n) return null;
      if (o = "#".concat((0, S.F6)(e, Z.default, j.Z)), c = n.name, null != n.icon) {
        let t = P.ZP.getGuildIconURL({
          id: e.guild_id,
          icon: n.icon,
          size: 40
        });
        s = (0, i.jsx)(m.qEK, {
          src: t,
          "aria-label": o,
          size: m.EFr.SIZE_40
        })
      } else {
        let e = (0, U.Zg)(n.name);
        s = (0, i.jsx)("div", {
          className: V.acronym,
          "aria-hidden": true,
          children: (0, i.jsx)(m.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, i.jsxs)(m.P3F, {
    onClick: n,
    className: l()(V.rowContainer, {
      [V.disabled]: r
    }),
    children: [(0, i.jsxs)("div", {
      className: V.rowLeft,
      children: [(0, i.jsx)("div", {
        className: V.rowAvatar,
        children: s
      }), (0, i.jsxs)("div", {
        className: V.rowNameContainer,
        children: [(0, i.jsx)(m.Text, {
          variant: "text-md/semibold",
          className: l()(V.rowName, {
            [V.disabled]: r
          }),
          children: o
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/medium",
          className: l()(V.rowSubName, {
            [V.disabled]: r
          }),
          children: c
        })]
      })]
    }), (0, i.jsx)(m.XZJ, {
      disabled: r,
      value: a,
      type: m.XZJ.Types.INVERTED,
      displayOnly: true,
      className: V.rowRight
    })]
  })
}