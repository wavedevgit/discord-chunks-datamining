/** Chunk was on web.js **/
/** chunk id: 541716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ie: () => R,
  OW: () => c,
  gy: () => u
});
var Chunk873546 = require("./873546.js"),
  Chunk703558 = require("./703558.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var c = function(e) {
    return e[e.TOOLTIP = 0] = "TOOLTIP", e[e.STATIC = 1] = "STATIC", e[e.NONE = 2] = "NONE", e
  }({}),
  u = function(e) {
    return e[e.DEFAULT = 0] = "DEFAULT", e[e.INLINE = 1] = "INLINE", e[e.FLUSH = 2] = "FLUSH", e
  }({});
let d = {
    analyticsName: "normal",
    attachments: true,
    autocomplete: {
      addReactionShortcut: true,
      forceChatLayer: true,
      reactions: true,
      mentionSuggestions: true
    },
    commands: {
      enabled: true
    },
    confetti: {
      button: true
    },
    drafts: {
      type: Chunk703558.d.ChannelMessage,
      commandType: Chunk703558.d.SlashCommand,
      autoSave: true
    },
    emojis: {
      button: true
    },
    gifs: {
      button: true,
      allowSending: true
    },
    gifts: {
      button: true
    },
    permissions: {
      requireSendMessages: true
    },
    showThreadPromptOnReply: true,
    stickers: {
      button: true,
      allowSending: true,
      autoSuggest: true
    },
    soundmoji: {
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    submit: {
      button: true,
      ignorePreference: Chunk873546.tq,
      disableEnterToSubmit: Chunk873546.tq,
      clearOnSubmit: true,
      useDisabledStylesOnSubmit: true
    },
    uploadLongMessages: true,
    upsellLongMessages: {
      iconOnly: false
    },
    showCharacterCount: true,
    sedReplace: true,
    showSlowmodeIndicator: true,
    showTypingIndicator: true
  },
  f = {
    analyticsName: "overlay",
    autocomplete: {
      addReactionShortcut: true,
      forceChatLayer: true,
      mentionSuggestions: true
    },
    confetti: {
      button: true
    },
    drafts: {
      type: Chunk703558.d.ChannelMessage,
      autoSave: true
    },
    emojis: {
      button: true
    },
    gifs: {
      button: true,
      allowSending: true
    },
    gifts: {
      button: true
    },
    permissions: {
      requireSendMessages: true
    },
    showThreadPromptOnReply: true,
    stickers: {
      button: true,
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    submit: {
      button: true,
      ignorePreference: Chunk873546.tq,
      disableEnterToSubmit: Chunk873546.tq,
      clearOnSubmit: true,
      useDisabledStylesOnSubmit: true
    },
    upsellLongMessages: {
      iconOnly: false
    },
    showCharacterCount: true,
    showSlowmodeIndicator: true,
    showTypingIndicator: true
  },
  p = {
    analyticsName: "sidebar",
    attachments: true,
    autocomplete: {
      addReactionShortcut: true,
      mentionSuggestions: true
    },
    commands: {
      enabled: true
    },
    confetti: {
      button: true
    },
    disableAutoFocus: true,
    drafts: {
      type: Chunk703558.d.ChannelMessage,
      commandType: Chunk703558.d.SlashCommand
    },
    emojis: {
      button: true
    },
    gifs: {
      allowSending: true
    },
    permissions: {
      requireSendMessages: true
    },
    stickers: {
      allowSending: true,
      autoSuggest: true
    },
    soundmoji: {
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    submit: {
      button: true,
      ignorePreference: Chunk873546.tq,
      disableEnterToSubmit: Chunk873546.tq,
      clearOnSubmit: true,
      useDisabledStylesOnSubmit: true
    },
    uploadLongMessages: true,
    showCharacterCount: true,
    upsellLongMessages: {
      iconOnly: true
    },
    showSlowmodeIndicator: true,
    showTypingIndicator: true
  },
  _ = {
    analyticsName: "edit",
    autocomplete: {
      mentionSuggestions: true
    },
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    soundmoji: {
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    expressionPicker: {
      onlyEmojis: true
    },
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true
    },
    showCharacterCount: true
  },
  m = {
    analyticsName: "forum",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    gifs: {
      allowSending: true
    },
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      allowEmptyMessage: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    showCharacterCount: true,
    showSlowmodeIndicator: true,
    showTypingIndicator: true
  },
  h = {
    analyticsName: "voice_channel_status",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    expressionPicker: {
      onlyEmojis: true
    },
    permissions: {
      requireSendMessages: false
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      allowEmptyMessage: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    markdown: {
      disableCodeBlocks: true,
      disableBlockQuotes: true
    },
    showCharacterCount: true,
    layout: 1
  },
  g = {
    analyticsName: "thread_creation",
    attachments: true,
    autocomplete: {
      mentionSuggestions: true
    },
    drafts: {
      type: Chunk703558.d.FirstThreadMessage
    },
    emojis: {
      button: true
    },
    gifs: {
      allowSending: true
    },
    stickers: {
      allowSending: true
    },
    soundmoji: {
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    permissions: {
      requireCreateTherads: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      button: true
    },
    disableAutoFocus: true,
    showCharacterCount: true,
    hideAttachmentArea: true,
    upsellLongMessages: {
      iconOnly: true
    }
  },
  E = l(o({}, d), {
    analyticsName: "create_announcement_post",
    stickers: {
      allowSending: false
    },
    gifts: {},
    commands: {
      enabled: false
    },
    submit: {
      disableEnterToSubmit: true
    },
    disableAutoFocus: true,
    permissions: {
      requireSendMessages: true
    }
  }),
  b = {
    analyticsName: "create_forum_post",
    attachments: true,
    autocomplete: {
      mentionSuggestions: true
    },
    drafts: {
      type: Chunk703558.d.FirstThreadMessage
    },
    gifs: {
      allowSending: true
    },
    stickers: {
      allowSending: true
    },
    soundmoji: {
      allowSending: true
    },
    users: {
      allowMentioning: true
    },
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    disableAutoFocus: true,
    hideAttachmentArea: true,
    uploadLongMessages: true,
    showSlowmodeIndicator: true,
    layout: 2
  },
  y = {
    analyticsName: "create_poll",
    attachments: true,
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    gifs: {
      allowSending: true
    },
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    }
  },
  O = {
    analyticsName: "user_profile",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    permissions: {
      requireSendMessages: false
    },
    users: {
      allowMentioning: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      clearOnSubmit: true
    },
    toolbarType: 2,
    layout: 1
  },
  v = {
    analyticsName: "overlay_inline_reply",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    permissions: {
      requireSendMessages: true
    },
    users: {
      allowMentioning: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    submit: {
      useDisabledStylesOnSubmit: false,
      clearOnSubmit: true
    },
    toolbarType: 2,
    hideAccessoryBar: true,
    layout: 1
  },
  S = {
    analyticsName: "user_profile_reply",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    permissions: {
      requireSendMessages: false
    },
    users: {
      allowMentioning: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      clearOnSubmit: true
    },
    toolbarType: 2
  },
  I = {
    analyticsName: "profile_bio_input",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    disableAutoFocus: true,
    showCharacterCount: true
  },
  T = {
    analyticsName: "custom_gift_type",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    emojis: {},
    permissions: {
      requireSendMessages: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    disableAutoFocus: true,
    showCharacterCount: true
  },
  A = {
    analyticsName: "rules_input",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    permissions: {
      requireSendMessages: false
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    showCharacterCount: false,
    disableAutoFocus: true,
    hideAccessoryBar: true
  },
  C = {
    analyticsName: "forum_channel_guidelines",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    permissions: {
      requireSendMessages: false
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    showCharacterCount: true,
    toolbarType: 1
  },
  N = {
    analyticsName: "channel_topic",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    permissions: {
      requireSendMessages: false
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    showCharacterCount: true,
    toolbarType: 1,
    markdown: {
      disableCodeBlocks: true,
      disableBlockQuotes: true,
      disableInlineCode: true
    }
  },
  P = {
    analyticsName: "atomic_reator_reply_input",
    drafts: {
      type: Chunk703558.d.ChannelMessage
    },
    permissions: {
      requireSendMessages: true
    },
    users: {
      allowMentioning: true
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    },
    disableAutoFocus: true,
    showCharacterCount: true,
    layout: 1
  },
  R = {
    NORMAL: d,
    OVERLAY: f,
    OVERLAY_INLINE_REPLY: v,
    SIDEBAR: p,
    EDIT: _,
    FORM: m,
    VOICE_CHANNEL_STATUS: h,
    THREAD_CREATION: g,
    USER_PROFILE: O,
    USER_PROFILE_REPLY: S,
    PROFILE_BIO_INPUT: I,
    CUSTOM_GIFT: T,
    RULES_INPUT: A,
    CREATE_FORUM_POST: b,
    CREATE_ANNOUNCEMENT_POST: E,
    CREATE_POLL: y,
    FORUM_CHANNEL_GUIDELINES: C,
    CHANNEL_TOPIC: N,
    ATOMIC_REACTOR_REPLY_INPUT: P,
    FORWARD_MESSAGE_INPUT: {
      analyticsName: "forward_message_input",
      drafts: {
        type: Chunk703558.d.ChannelMessage
      },
      emojis: {
        button: true
      },
      soundmoji: {
        allowSending: true
      },
      permissions: {
        requireSendMessages: true
      },
      submit: {
        useDisabledStylesOnSubmit: true
      },
      users: {
        allowMentioning: true
      },
      autocomplete: {
        alwaysUseLayer: true,
        small: true,
        mentionSuggestions: true
      },
      disableAutoFocus: true,
      showCharacterCount: true,
      layout: 1
    },
    SHARE_CUSTOM_CLIENT_THEME_INPUT: {
      analyticsName: "share_custom_client_theme_input",
      drafts: {
        type: Chunk703558.d.ChannelMessage
      },
      emojis: {
        button: true
      },
      soundmoji: {
        allowSending: true
      },
      permissions: {
        requireSendMessages: true
      },
      submit: {
        useDisabledStylesOnSubmit: true
      },
      users: {
        allowMentioning: true
      },
      autocomplete: {
        alwaysUseLayer: true,
        small: true
      },
      disableAutoFocus: true,
      showCharacterCount: true,
      layout: 1
    }
  }