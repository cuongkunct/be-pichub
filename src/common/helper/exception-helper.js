import HTTP_STATUS from "./status-code.js";

// ================================
// Custom Exception Classes
// ================================
// Mục đích:
// - Chuẩn hóa lỗi trong toàn bộ project
// - Mỗi lỗi gắn sẵn HTTP status code
// - Dễ dùng cho middleware handle error của Express
//
// Ví dụ middleware:
// app.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).json({
//     name: err.name,
//     message: err.message,
//   });
// });

/**
 * BadRequestException – 400
 * -------------------------
 * Dùng khi:
 * - Request từ client không hợp lệ
 * - Thiếu field bắt buộc
 * - Sai kiểu dữ liệu / format
 * - Validate body, query, params thất bại
 *
 * Ví dụ:
 * throw new BadRequestException('Email không hợp lệ');
 */
export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    super(message);
    this.name = "BadRequest";
    this.code = HTTP_STATUS.BAD_REQUEST;
  }
}

/**
 * UnauthorizedException – 401
 * -----------------------------
 * Dùng khi:
 * - Chưa đăng nhập
 * - Không có token
 * - Token hết hạn / không hợp lệ
 *
 * Ví dụ:
 * throw new UnauthorizedException('Token không hợp lệ');
 */
export class UnauthorizedException extends Error {
  constructor(message = "UnauthorizedException") {
    super(message);
    this.name = "Unauthorized";
    this.code = HTTP_STATUS.UNAUTHORIZED;
  }
}

/**
 * ForbiddenException – 403
 * -------------------------
 * Dùng khi:
 * - Đã đăng nhập nhưng KHÔNG có quyền truy cập
 * - Role không đủ quyền (user truy cập API admin)
 *
 * Ví dụ:
 * throw new ForbiddenException('Bạn không có quyền truy cập');
 */
export class ForbiddenException extends Error {
  constructor(message = "ForbiddenException") {
    super(message);
    this.name = "Forbidden";
    this.code = HTTP_STATUS.FORBIDDEN;
  }
}

/**
 * NotFoundException – 404
 * ------------------------
 * Dùng khi:
 * - Không tìm thấy tài nguyên
 * - ID không tồn tại trong database
 *
 * Ví dụ:
 * throw new NotFoundException('Không tìm thấy người dùng');
 */
export class NotFoundException extends Error {
  constructor(message = "NotFoundException") {
    super(message);
    this.name = "NotFound";
    this.code = HTTP_STATUS.NOT_FOUND;
  }
}

/**
 * ConflictException – 409
 * ------------------------
 * Dùng khi:
 * - Xung đột dữ liệu
 * - Trùng email, username, phone...
 * - Vi phạm unique constraint
 *
 * Ví dụ:
 * throw new ConflictException('Email đã tồn tại');
 */
export class ConflictException extends Error {
  constructor(message = "ConflictException") {
    super(message);
    this.name = "Conflict";
    this.code = HTTP_STATUS.CONFLICT;
  }
}

/**
 * InternalServerException – 500
 * ------------------------------
 * Dùng khi:
 * - Lỗi không mong muốn từ server
 * - Lỗi logic
 * - Lỗi database, code bug
 *
 * LƯU Ý:
 * - Không nên expose message chi tiết cho client (production)
 *
 * Ví dụ:
 * throw new InternalServerException('Lỗi hệ thống');
 */
export class InternalServerException extends Error {
  constructor(message = "InternalServerException") {
    super(message);
    this.name = "InternalServerError";
    this.code = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  }
}

/**
 * ServiceUnavailableException – 503
 * ----------------------------------
 * Dùng khi:
 * - Server đang bảo trì
 * - Server quá tải
 * - Service phụ thuộc bị down
 *
 * Ví dụ:
 * throw new ServiceUnavailableException('Hệ thống đang bảo trì');
 */
export class ServiceUnavailableException extends Error {
  constructor(message = "ServiceUnavailableException") {
    super(message);
    this.name = "ServiceUnavailable";
    this.code = HTTP_STATUS.SERVICE_UNAVAILABLE;
  }
}

/**
 * GatewayTimeoutException – 504
 * ------------------------------
 * Dùng khi:
 * - Request sang service khác bị timeout
 * - API bên thứ 3 phản hồi quá chậm
 *
 * Ví dụ:
 * throw new GatewayTimeoutException('Request tới payment service bị timeout');
 */
export class GatewayTimeoutException extends Error {
  constructor(message = "GatewayTimeoutException") {
    super(message);
    this.name = "GatewayTimeout";
    this.code = HTTP_STATUS.GATEWAY_TIMEOUT;
  }
}
