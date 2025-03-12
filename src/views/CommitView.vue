<template>
  <div class="commit-container">
    <div class="commit-content">
      <h1 class="commit-title">提交資訊</h1>
      <div class="commit-form">
        <div class="form-group">
          <label for="title">標題</label>
          <input type="text" id="title" v-model="title" placeholder="請輸入標題" />
        </div>
        <div class="form-group">
          <label for="description">描述</label>
          <textarea id="description" v-model="description" placeholder="請輸入描述" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="location">位置</label>
          <input type="text" id="location" v-model="location" placeholder="請輸入位置" />
        </div>
        <div class="form-actions">
          <button class="btn-submit" @click="submitForm">提交</button>
          <button class="btn-cancel" @click="resetForm">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const location = ref('');

const submitForm = () => {
  // 提交表單邏輯
  console.log('提交表單', { title: title.value, description: description.value, location: location.value });
  // 這裡可以添加實際的提交邏輯
  resetForm();
};

const resetForm = () => {
  title.value = '';
  description.value = '';
  location.value = '';
};
</script>

<style lang="scss" scoped>
.commit-container {
  padding-top: 64px; /* 導航欄高度 */
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2rem;
  
  .commit-content {
    max-width: 800px;
    width: 100%;
    margin: 2rem auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    
    .commit-title {
      font-size: 1.75rem;
      color: #1976d2;
      margin-bottom: 1.5rem;
      font-weight: 600;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 0.75rem;
    }
    
    .commit-form {
      .form-group {
        margin-bottom: 1.5rem;
        
        label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
          
          &:focus {
            outline: none;
            border-color: #1976d2;
            box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
          }
        }
      }
      
      .form-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        
        button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          
          &.btn-submit {
            background-color: #1976d2;
            color: white;
            
            &:hover {
              background-color: #1565c0;
            }
          }
          
          &.btn-cancel {
            background-color: #e0e0e0;
            color: #333;
            
            &:hover {
              background-color: #d5d5d5;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .commit-container {
    padding-top: 56px; /* 響應式導航欄高度 */
    
    .commit-content {
      margin: 1rem;
      padding: 1.5rem;
      
      .commit-title {
        font-size: 1.5rem;
      }
    }
  }
}
</style> 