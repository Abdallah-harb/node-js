-- Database: node

-- DROP DATABASE IF EXISTS node;

CREATE DATABASE node
    WITH
    OWNER = homestead
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE stores (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            code VARCHAR(50) NOT NULL,
            address TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.book (
             id SERIAL PRIMARY KEY,
             title VARCHAR(255) NOT NULL,
             description TEXT,
             isbn VARCHAR(50) UNIQUE NOT NULL,
             author VARCHAR(255) NOT NULL,
             publisher VARCHAR(255),
             pages INT CHECK (pages > 0),
             store_id INT NOT NULL,
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
             CONSTRAINT fk_store FOREIGN KEY (store_id) REFERENCES public.store (id) ON DELETE CASCADE
);