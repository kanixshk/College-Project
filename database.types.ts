export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      menu_items: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          image_url: string | null
          category: string
          cholesterol_level: number
          is_bestseller: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          image_url?: string | null
          category: string
          cholesterol_level: number
          is_bestseller?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          image_url?: string | null
          category?: string
          cholesterol_level?: number
          is_bestseller?: boolean
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          total_amount: number
          total_cholesterol: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_amount: number
          total_cholesterol: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total_amount?: number
          total_cholesterol?: number
          status?: string
          created_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_item_id: string
          quantity: number
          price_at_time: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          menu_item_id: string
          quantity: number
          price_at_time: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          menu_item_id?: string
          quantity?: number
          price_at_time?: number
          created_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          max_cholesterol_level: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          max_cholesterol_level?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          max_cholesterol_level?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}