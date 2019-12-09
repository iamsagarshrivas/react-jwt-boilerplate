
export const LocalStorageService = (function (params) {
	var _service;

	function _getService() {
		if (!_service) {
			_service = this;
			return _service
		}
	}
	function _setToken(token) {
		localStorage.setItem('token', token)
	}

	function _getToken() {
		return localStorage.getItem('token')
	}

	function _clearToken() {
		localStorage.removeItem('token')

	}

	return {
		getService: _getService,
		setToken: _setToken,
		getToken: _getToken,
		clearToken: _clearToken,
	}

})();