global _start

section .text
_start:
    mov rax, 1          ; system call for write
    mov rdi, 1          ; file descriptor 1 is stdout
    mov rsi, message    ; address of string
    mov rdx, 13         ; message length
    syscall

    mov rax, 60         ; system call for exit
    xor rdi, rdi        ; exit code 0
    syscall

section .data
message: db "Hello, World", 10
