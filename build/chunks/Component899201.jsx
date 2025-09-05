/** Chunk was on 4530 **/
/** chunk id: 899201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
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
  Chunk755721 = require("./755721.js"),
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

function B(e) {
  var t, n, {
      applicationId: r,
      mediaUrl: l,
      onClose: s,
      transitionState: m
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
  let _ = (0, d.e7)([F.ZP], () => F.ZP.getCurrentEmbeddedActivity());
  (0, h.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: r,
      activity_session_id: null == _ ? true : _.compositeInstanceId
    }
  });
  let [N] = (0, w.Z)([r]), x = (0, d.e7)([A.default], () => A.default.getCurrentUser()), [D, M] = a.useState(""), [R, B] = a.useState([]), [Q, Y] = a.useState(null), [W, X] = a.useState(null), [$, J] = a.useState(false);
  a.useEffect(() => {
    (async () => {
      let e = k.Z.toURLSafe(l);
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
  let ee = (0, d.Wu)([C.Z, j.Z], () => C.Z.getInviteSuggestionRows().filter(e => e.type === U.bm.FRIEND || e.type === U.bm.DM || j.Z.can(G.Plq.ATTACH_FILES, e.item)));
  a.useEffect(() => {
    (0, f.x)({
      omitUserIds: new Set,
      applicationId: r,
      inviteTargetType: q.Iq.EMBEDDED_APPLICATION
    })
  }, [r]), a.useEffect(() => (0, f.C)(D), [D]), a.useEffect(() => {
    let e;
    return $ && (e = setTimeout(() => {
      J(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [$]);
  let et = a.useCallback(async () => {
      await s()
    }, [s]),
    en = a.useCallback(async () => {
      P.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
        user_id: null == x ? true : x.id,
        application_id: r,
        activity_session_id: null == _ ? true : _.compositeInstanceId
      }), await L.ZP.copyImage(l), J(true)
    }, [null == _ ? true : _.compositeInstanceId, r, l, null == x ? true : x.id]),
    ei = a.useCallback(async () => {
      let e = 0,
        t = 0,
        n = 0;
      async function i(i) {
        let a;
        switch (i.type) {
          case U.bm.DM:
          case U.bm.FRIEND:
            a = await g.Z.ensurePrivateChannel(i.id), e++;
            break;
          case U.bm.GROUP_DM:
            a = i.id, t++;
            break;
          case U.bm.CHANNEL:
            a = i.id, n++;
            break;
          default:
            return
        }
        let l = O.Z.getChannel(a);
        if (null != Q) {
          let e = new File([Q], Q.name, {
            type: Q.type
          });
          I.Z.addFile({
            file: {
              file: e,
              platform: y.ow.WEB,
              origin: "unknown:activity_share"
            },
            channelId: a,
            draftType: T.d.ChannelMessage
          })
        }
        let s = Z.Z.getUploads(a, T.d.ChannelMessage);
        b.Z.sendMessage(a, null != N ? E.ZP.parse(l, V.intl.formatToPlainString(V.t.jQULqK, {
          applicationName: "**".concat(N.name, "**")
        })) : {
          content: "",
          tts: false,
          invalidEmojis: [],
          validNonShortcutEmojis: []
        }, false, {
          eagerDispatch: false,
          location: H.dy.ACTIVITY_SHARE,
          applicationId: r,
          attachmentsToUpload: s,
          onAttachmentUploadError: (e, t, n) => {
            var i;
            (0, v.A)({
              file: e,
              guildId: null != (i = null == l ? true : l.getGuildId()) ? i : null,
              analyticsLocations: [],
              code: t,
              reason: n
            })
          }
        }), I.Z.clearAll(a, T.d.ChannelMessage)
      }
      let a = R.map(e => i(e));
      P.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == x ? true : x.id,
        application_id: r,
        activity_session_id: null == _ ? true : _.compositeInstanceId,
        n_users: e,
        n_gdms: t,
        n_channels: n
      });
      try {
        await Promise.all(a), null != N && (0, p.showToast)((0, p.createToast)(V.intl.formatToPlainString(V.t.jQULqK, {
          applicationName: N.name
        }), p.ToastType.SUCCESS))
      } catch (e) {
        throw (0, p.showToast)((0, p.createToast)(V.intl.string(V.t.PanA4O), p.ToastType.FAILURE)), e
      }
      et()
    }, [_, N, r, R, Q, et, x]);
  return null == W ? (0, i.jsx)(p.$jN, {}) : (0, i.jsx)(u.Modal, (t = function(e) {
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
    transitionState: m,
    onClose: et,
    size: "md",
    title: V.intl.string(V.t.r9qKo6),
    input: (0, i.jsx)(p.E1j, {
      placeholder: V.intl.string(V.t["5h0QOD"]),
      "aria-label": V.intl.string(V.t["5h0QOD"]),
      query: D,
      onChange: e => M(e),
      onClear: () => M("")
    }),
    preview: (0, i.jsxs)(p.Kqy, {
      direction: "vertical",
      align: "center",
      gap: 12,
      children: [(0, i.jsx)("img", {
        alt: l,
        src: W,
        className: z.previewImage
      }), R.length >= 10 ? (0, i.jsx)(p.Text, {
        variant: "text-xs/normal",
        children: V.intl.format(V.t.mdE9iI, {
          maxShares: 10
        })
      }) : null]
    }),
    actions: [...L.ZP.canCopyImage(l) ? [{
      text: $ ? V.intl.string(V.t["t5VZ8/"]) : V.intl.string(V.t.tvUqWl),
      onClick: en,
      variant: "secondary",
      disabled: $
    }] : [], {
      text: V.intl.string(V.t.TXNS7e),
      onClick: ei,
      variant: "primary",
      disabled: R.length <= 0
    }]
  }, S), n = n = {
    children: ee.map((e, t) => (0, i.jsxs)(a.Fragment, {
      children: [0 === t ? null : (0, i.jsx)("div", {
        className: z.rowDivider
      }), (0, i.jsx)(K, {
        row: e,
        onClick: () => (() => {
          if (false !== R.findIndex(t => t.id === e.item.id)) B(R.filter(t => t.id !== e.item.id));
          else {
            if (R.length >= 10) return;
            null != Q && B([...R, {
              id: e.item.id,
              type: e.type
            }])
          }
        })(),
        checked: R.some(t => t.id === e.item.id),
        disabled: !R.some(t => t.id === e.item.id) && R.length >= 10
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

function K(e) {
  let {
    row: t,
    onClick: n,
    checked: a,
    disabled: r
  } = e, s = null, o = null, c = null;
  switch (t.type) {
    case U.bm.DM:
    case U.bm.FRIEND:
      s = (0, i.jsx)(p.qEK, {
        size: p.EFr.SIZE_40,
        src: t.item.getAvatarURL(null, 128, false),
        "aria-label": t.item.username
      }), o = R.ZP.getName(t.item), c = R.ZP.getUserTag(t.item);
      break;
    case U.bm.GROUP_DM: {
      let e = (0, S.x)(t.item),
        n = (0, _.F6)(t.item, A.default, x.Z);
      s = (0, i.jsx)(p.qEK, {
        src: e,
        "aria-label": n,
        size: p.EFr.SIZE_40
      }), o = (0, _.F6)(t.item, A.default, x.Z);
      break
    }
    case U.bm.CHANNEL: {
      let e = t.item,
        n = N.Z.getGuild(e.guild_id);
      if (null == n) return null;
      if (o = "#".concat((0, _.F6)(e, A.default, x.Z)), c = n.name, null != n.icon) {
        let t = D.ZP.getGuildIconURL({
          id: e.guild_id,
          icon: n.icon,
          size: 40
        });
        s = (0, i.jsx)(p.qEK, {
          src: t,
          "aria-label": o,
          size: p.EFr.SIZE_40
        })
      } else {
        let e = (0, M.Zg)(n.name);
        s = (0, i.jsx)("div", {
          className: z.acronym,
          "aria-hidden": true,
          children: (0, i.jsx)(p.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, i.jsxs)(p.P3F, {
    onClick: n,
    className: l()(z.rowContainer, {
      [z.disabled]: r
    }),
    children: [(0, i.jsxs)("div", {
      className: z.rowLeft,
      children: [(0, i.jsx)("div", {
        className: z.rowAvatar,
        children: s
      }), (0, i.jsxs)("div", {
        className: z.rowNameContainer,
        children: [(0, i.jsx)(p.Text, {
          variant: "text-md/semibold",
          className: l()(z.rowName, {
            [z.disabled]: r
          }),
          children: o
        }), (0, i.jsx)(p.Text, {
          variant: "text-xs/medium",
          className: l()(z.rowSubName, {
            [z.disabled]: r
          }),
          children: c
        })]
      })]
    }), (0, i.jsx)(m.$q, {
      disabled: r,
      value: a,
      type: m.M0.INVERTED,
      displayOnly: true,
      className: z.rowRight
    })]
  })
}