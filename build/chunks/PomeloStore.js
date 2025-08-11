/** Chunk was on 85342 **/
/** chunk id: 135200, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var n, i, a, Chunk31775 = require("./31775.js"),
  s = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js");
let d = {
    taken: null,
    error: true,
    rateLimited: true
  },
  m = {
    validations: new(s())({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: false,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: true
        },
        fetched: false,
        usernameSuggestionLoading: false
      },
      registration: {
        suggestion: {
          username: true
        },
        source: true,
        fetched: false
      }
    }
  };
class g extends(a = Chunk442837.ZP.Store) {
  isRateLimited() {
    return null != m.retryAfterTime && Date.now() < m.retryAfterTime
  }
  validate(e) {
    let t = m.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? d : this.isRateLimited() || null == t || !t.rateLimited ? t : true
  }
  registrationUsernameSuggestion() {
    return m.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return m.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return m.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return m.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return m.suggestions.registration.source === e && m.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return m.suggestions.migration.fetched
  }
}
i = "PomeloStore", (n = "displayName") in g ? Object.defineProperty(g, n, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : g[n] = i;
let f = new g(Chunk570140.Z, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: r
    } = e;
    m.validations.set(t, {
      taken: r
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: r,
      statusCode: n,
      retryAfter: i
    } = e;
    429 === n ? m.validations.set(t, {
      taken: null,
      error: r,
      rateLimited: true
    }, (null != i ? i : 7) * u.Z.Millis.SECOND) : m.validations.set(t, {
      taken: null,
      error: r
    }), null != i && (m.retryAfterTime = Date.now() + i * u.Z.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    m.suggestions.migration = {
      suggestion: {
        username: true
      },
      fetched: false,
      usernameSuggestionLoading: false
    }, m.suggestions.registration = {
      suggestion: {
        username: true
      },
      source: true,
      fetched: false
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    m.suggestions.migration = {
      suggestion: t,
      fetched: true,
      usernameSuggestionLoading: false
    }, (null == t ? true : t.invalid_current_username) === true && (m.currentUsernameInvalid = true)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    m.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: r
    } = e;
    m.suggestions.registration = {
      suggestion: t,
      source: r,
      fetched: true
    }, (null == t ? true : t.username) != null && m.validations.set(t.username, {
      taken: false
    })
  }
})