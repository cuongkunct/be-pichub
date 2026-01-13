/**
 * HTTP Status Codes dùng cho Express.js
 * --------------------------------------------------
 * File này giúp bạn:
 * - Dùng chung status code trong toàn bộ project
 * - Tránh hard-code số (200, 404, 500...)
 * - Code dễ đọc, dễ maintain
 *
 * Cách dùng:
 * import HTTP_STATUS from '@/constants/httpStatusCodes';
 * res.status(HTTP_STATUS.OK).json({...})
 */

const HTTP_STATUS = {
  /* =====================
   * 2xx – Success
   * ===================== */

  OK: 200, // Thành công (GET, PUT, DELETE)
  CREATED: 201, // Tạo mới thành công (POST)
  ACCEPTED: 202, // Đã nhận request, đang xử lý
  NO_CONTENT: 204, // Thành công nhưng không có dữ liệu trả về

  /* =====================
   * 3xx – Redirection
   * ===================== */

  MOVED_PERMANENTLY: 301, // Tài nguyên đã chuyển vĩnh viễn
  FOUND: 302, // Tài nguyên tạm thời chuyển hướng
  NOT_MODIFIED: 304, // Dữ liệu chưa thay đổi (cache)

  /* =====================
   * 4xx – Client Errors
   * ===================== */

  BAD_REQUEST: 400, // Request không hợp lệ (thiếu field, sai format)
  UNAUTHORIZED: 401, // Chưa đăng nhập / token không hợp lệ
  FORBIDDEN: 403, // Không có quyền truy
  NOT_FOUND: 404, // Không tìm thấy tài nguyên
  METHOD_NOT_ALLOWED: 405, // Method không được hỗ trợ
  CONFLICT: 409, // Xung đột dữ liệu (trùng email, username...)
  UNPROCESSABLE_ENTITY: 422, // Validate dữ liệu thất bại
  TOO_MANY_REQUESTS: 429, // Gửi request quá nhiều (rate limit)

  /* =====================
   * 5xx – Server Errors
   * ===================== */

  INTERNAL_SERVER_ERROR: 500, // Lỗi server không xác định
  NOT_IMPLEMENTED: 501, // Server chưa hỗ trợ chức năng này
  BAD_GATEWAY: 502, // Lỗi gateway / server trung gian
  SERVICE_UNAVAILABLE: 503, // Server quá tải / đang bảo trì
  GATEWAY_TIMEOUT: 504, // Gateway timeout
};

export default HTTP_STATUS;

/* =====================
 * Ví dụ sử dụng trong Express
 * =====================
 *
 * import HTTP_STATUS from '@/constants/httpStatusCodes';
 *
 * app.get('/api/users', (req, res) => {
 *   return res.status(HTTP_STATUS.OK).json({
 *     message: 'Lấy danh sách users thành công',
 *     data: []
 *   });
 * });
 *
 * app.post('/api/login', (req, res) => {
 *   return res.status(HTTP_STATUS.UNAUTHORIZED).json({
 *     message: 'Sai email hoặc mật khẩu'
 *   });
 * });
 */
