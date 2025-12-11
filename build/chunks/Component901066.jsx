/** Chunk was on 9924 **/
/** chunk id: 901066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk328977 = require("./328977.js"),
  Chunk666233 = require("./666233.jsx"),
  Chunk360328 = require("./360328.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491727 = require("./491727.js"),
  Chunk433110 = require("./433110.js");

function y(e) {
  let {
    icon: t,
    label: n,
    onClick: r,
    disabled: a
  } = e;
  return (0, l.jsxs)(d.P3F, {
    className: i()(P.actionButton, {
      [P.disabled]: a
    }),
    onClick: a ? E.dG4 : r,
    "aria-label": n,
    children: [(0, l.jsx)(t, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }), (0, l.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "none",
      children: n
    })]
  })
}

function I(e) {
  let {
    user: t,
    guildId: n,
    joinRequest: r
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), s = () => {
    (0, p.openUserProfileModal)({
      userId: t.id,
      joinRequestId: r.joinRequestId,
      sourceAnalyticsLocations: a
    })
  };
  return (0, l.jsxs)("div", {
    className: P.infoContainer,
    children: [(0, l.jsxs)("div", {
      className: _.memberNameContainer,
      children: [(0, l.jsx)(d.P3F, {
        onClick: s,
        className: i()(P.clickable, _.memberAvatar),
        children: (0, l.jsx)(d.qEK, {
          src: t.getAvatarURL(n, 48),
          "aria-label": t.username,
          size: d.EFr.SIZE_48
        })
      }), (0, l.jsxs)("div", {
        className: _.memberNameAndTagContainer,
        children: [(0, l.jsxs)("div", {
          className: _.memberNameTextContainer,
          children: [(0, l.jsx)(d.P3F, {
            onClick: s,
            className: P.clickable,
            children: (0, l.jsx)(d.Text, {
              variant: "text-lg/medium",
              children: null == t ? true : t.globalName
            })
          }), (0, l.jsx)(g.ZP, {
            primaryGuild: null == t ? true : t.primaryGuild,
            userId: null == t ? true : t.id,
            contextGuildId: n,
            badgeSize: N.Gg.SIZE_16,
            textVariant: "heading-md/semibold",
            className: _.memberClanTag,
            containerClassName: _.memberClanTagContainer
          })]
        }), (0, l.jsx)(d.P3F, {
          onClick: s,
          className: P.clickable,
          children: (0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-default",
            children: S.ZP.getUserTag(t)
          })
        })]
      })]
    }), (0, l.jsx)(d.P3F, {
      className: _.closeAction,
      onClick: () => x.Z.setSelectedGuildJoinRequest(n, null),
      children: (0, l.jsx)(d.Dio, {
        size: "md",
        color: "currentColor"
      })
    })]
  })
}

function R(e) {
  let {
    user: t,
    guildId: n,
    joinRequest: r
  } = e, {
    approveRequest: a,
    rejectRequest: i,
    handleOpenInterview: s,
    submitting: o
  } = (0, h.s)(n, t.id, r.joinRequestId, r.interviewChannelId);
  return (0, l.jsxs)("div", {
    className: P.actionRow,
    children: [(0, l.jsx)(y, {
      icon: d.owK,
      label: O.intl.string(O.t.BzjDQJ),
      onClick: a,
      disabled: o
    }), (0, l.jsx)(y, {
      icon: d.k$p,
      label: O.intl.string(O.t.hDtbsz),
      onClick: i,
      disabled: o
    }), (0, l.jsx)(y, {
      icon: d.kBi,
      label: O.intl.string(O.t.KQeYoC),
      onClick: s,
      disabled: o
    })]
  })
}

function w(e) {
  var t;
  let {
    joinRequest: n
  } = e, {
    actionedAt: r,
    actionedByUser: a,
    rejectionReason: i
  } = n;
  return (0, l.jsxs)("div", {
    className: P.actionContainer,
    children: [(0, l.jsx)(d.k$p, {
      size: "lg",
      color: d.TVs.colors.BACKGROUND_BASE_LOWER,
      secondaryColor: d.TVs.colors.INTERACTIVE_TEXT_DEFAULT
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: O.intl.string(O.t.bSZkla)
      }), null != a && null != r ? (0, l.jsxs)("div", {
        className: P.actionedInfo,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: O.intl.formatToPlainString(O.t.qnimbL, {
            username: null != (t = a.global_name) ? t : a.username
          })
        }), (0, l.jsx)("div", {
          className: P.dot
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: o()(T.default.extractTimestamp(r)).format("ll")
        })]
      }) : null, null != i && (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: O.intl.formatToPlainString(O.t.fU5PPM, {
          rejectionReason: i
        })
      })]
    })]
  })
}

function A(e) {
  var t;
  let {
    joinRequest: n
  } = e, {
    actionedAt: r,
    actionedByUser: a
  } = n;
  return (0, l.jsxs)("div", {
    className: P.actionContainer,
    children: [(0, l.jsx)(d.owK, {
      size: "lg",
      color: d.TVs.colors.STATUS_POSITIVE_BACKGROUND,
      secondaryColor: d.TVs.colors.STATUS_POSITIVE_TEXT
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: O.intl.string(O.t.aURgY2)
      }), null != a && null != r ? (0, l.jsxs)("div", {
        className: P.actionedInfo,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: O.intl.formatToPlainString(O.t.qnimbL, {
            username: null != (t = a.global_name) ? t : a.username
          })
        }), (0, l.jsx)("div", {
          className: P.dot
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: o()(T.default.extractTimestamp(r)).format("ll")
        })]
      }) : null]
    })]
  })
}

function M(e) {
  let {
    user: t,
    joinRequest: n
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.Text, {
      className: P.accountLabel,
      variant: "text-sm/medium",
      color: "text-muted",
      children: O.intl.string(O.t["ldCE/p"])
    }), (0, l.jsxs)("div", {
      className: P.userInfoContainer,
      children: [(0, l.jsxs)("div", {
        className: P.infoRow,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: O.intl.string(O.t.SaDIpL)
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: o()(T.default.extractTimestamp(t.id)).format("ll")
        })]
      }), (0, l.jsxs)("div", {
        className: P.infoRow,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: O.intl.string(O.t["Vt4cn+"])
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: o()(n.createdAt).format("ll")
        })]
      })]
    })]
  })
}

function Z(e) {
  let {
    guildId: t
  } = e, n = (0, j.L)({
    guildId: t
  }), {
    user: a
  } = null != n ? n : {}, s = r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.formResponses) ? e : []
  }, [null == n ? true : n.formResponses]), o = r.useMemo(() => null != a ? new v.Z(a) : null, [a]), u = (0, c.e7)([C.Z], () => C.Z.getGuild(t), [t]);
  return ((0, m.Tt)({
    subsection: O.intl.string(O.t.nqrK8X),
    location: null == u ? true : u.name
  }), null == n || null == u || null == o || null == a) ? null : (0, l.jsx)("section", {
    className: P.sidebar,
    children: (0, l.jsx)(d.Ttm, {
      children: (0, l.jsxs)("div", {
        className: P.innerContainer,
        children: [(0, l.jsxs)("div", {
          className: P.cardContainer,
          children: [(0, l.jsx)(I, {
            user: o,
            guildId: t,
            joinRequest: n
          }), n.applicationStatus === b.wB.SUBMITTED && (0, l.jsx)(R, {
            user: o,
            guildId: t,
            joinRequest: n
          }), n.applicationStatus === b.wB.REJECTED && (0, l.jsx)(w, {
            joinRequest: n
          }), n.applicationStatus === b.wB.APPROVED && (0, l.jsx)(A, {
            joinRequest: n
          })]
        }), (0, l.jsxs)("div", {
          className: i()(P.cardContainer, P.responsesContainer),
          children: [(0, l.jsx)(f.Z, {
            guildId: u.id,
            formFields: s,
            user: o,
            showRequirements: false
          }), (0, l.jsx)(M, {
            guildId: t,
            user: o,
            joinRequest: n
          })]
        })]
      })
    })
  })
}