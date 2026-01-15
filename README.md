# Pichub-Be API Documentation

**Base URL:** `http://localhost:3069/api`

**Auth:** JWT Bearer Token (`{{pichupAccessToken}}`)

---

## Environment Variables

Trước khi sử dụng API, tạo một **Postman Environment** hoặc `.env` file với các biến sau:

### Database Configuration

```
MONGOODB_USERNAME=your_db_username
MONGOODB_PASSWORD=your_db_password
MONGOODB_CLUSTER=your_db_cluster_url
```

### Cloudinary Configuration

```
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### JWT Token Secret

```
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

> 💡 **Lưu ý:** Sau khi đăng nhập (`/auth/login`), token sẽ được lưu vào biến môi trường `pichupAccessToken` để sử dụng cho các request bảo vệ bằng JWT.

---

## 1️⃣ Auth

### 1.1 Register

- **URL:** `POST /auth/register`
- **Body (JSON):**

```json
{
  "email": "mentor.qa7@gmail.com",
  "password": "123456",
  "fullName": "Tran van Cuong",
  "age": 15
}
```

- **Description:** Tạo tài khoản người dùng mới.

### 1.2 Login

- **URL:** `POST /auth/login`
- **Body (JSON):**

```json
{
  "email": "mentor.qa7@gmail.com",
  "password": "123456"
}
```

- **Description:** Đăng nhập, trả về `accessToken` và `refreshToken`.
- **Postman Script:** Lưu `accessToken` vào biến môi trường `pichupAccessToken`

```javascript
const { data } = pm.response.json();
pm.globals.set("pichupAccessToken", data.accessToken);
```

---

## 2️⃣ User

### 2.1 Upload Avatar

- **URL:** `POST /user/upload-avatar`
- **Auth:** Bearer Token
- **Body:** Form-data, key: `avatar` (file)
- **Description:** Upload ảnh đại diện cho người dùng.

### 2.2 Edit Profile

- **URL:** `POST /user/edit-profile`
- **Auth:** Bearer Token
- **Body (JSON):**

```json
{
  "password": "123456",
  "fullName": "Tran van Cuong",
  "age": 15
}
```

- **Description:** Cập nhật thông tin người dùng.

### 2.3 Get Profile

- **URL:** `POST /user/profile`
- **Auth:** Bearer Token
- **Description:** Lấy thông tin người dùng hiện tại.

### 2.4 Get User Saved Images

- **URL:** `POST /user/saved-images`
- **Auth:** Bearer Token
- **Description:** Lấy danh sách ảnh đã lưu của người dùng.

### 2.5 Get User Images

- **URL:** `GET /user/images`
- **Auth:** Bearer Token
- **Description:** Lấy tất cả ảnh người dùng đã upload.

---

## 3️⃣ Image

### 3.1 Create Post

- **URL:** `POST /image/create-post`
- **Auth:** Bearer Token
- **Body (JSON):** (Tùy dữ liệu post)
- **Description:** Tạo bài đăng ảnh mới.

### 3.2 Get All Images

- **URL:** `GET /image/images-search?key=fp`
- **Auth:** Bearer Token
- **Description:** Tìm kiếm tất cả ảnh theo từ khóa.

### 3.3 Image Details

- **URL:** `GET /image/:id`
- **Auth:** Bearer Token
- **Description:** Lấy chi tiết ảnh theo `id`.

### 3.4 Delete Image

- **URL:** `DELETE /image/remove/:id`
- **Auth:** Bearer Token
- **Description:** Xóa ảnh theo `id`.

---

## 4️⃣ Comment

### 4.1 Create Comment

- **URL:** `GET /image/:id/create-comment`
- **Auth:** Bearer Token
- **Body (JSON):**

```json
{
  "user": "user_id",
  "image": "image_id",
  "content": "Nội dung bình luận"
}
```

- **Description:** Thêm bình luận cho ảnh.

### 4.2 Get All Comments

- **URL:** `GET /image/comments/:id`
- **Auth:** Bearer Token
- **Description:** Lấy tất cả bình luận cho ảnh.

### 4.3 Save Image

- **URL:** `GET /image/save/:id`
- **Auth:** Bearer Token
- **Description:** Lưu ảnh vào danh sách của người dùng.
